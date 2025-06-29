# Clean Architecture avec Zustand - Récupération des Courses

## Structure

```
src/
├── domain/                     # Couche métier (core business)
│   ├── entities/              # Entités avec règles métier
│   ├── models/               # Interfaces et types
│   └── usecases/             # Cas d'usage (logique métier pure)
├── infrastructure/           # Couche externe (frameworks & drivers)
│   ├── gateways/            # Accès aux données externes
│   ├── repositories/        # Implémentation des contrats
│   └── presenters/          # Gestion d'état (Zustand)
├── userinterface/           # Couche présentation
│   └── components/          # Composants React + ViewModels
└── di/                     # Injection de dépendances
```

## Exemple : Récupération des Courses (Read-Only)

### 1. Entity (Règles métier)

```typescript
// src/domain/entities/course.entity.ts
export class CourseEntity {
  canBePublished(): boolean {
    return this.isValidTitle() && this.isValidDescription();
  }

  getTitleErrors(): string[] {
    // Validation métier pure
  }
}
```

### 2. Use Case (Orchestration)

```typescript
// src/domain/usecases/courses.usecase.ts
export class CoursesUseCase {
  constructor(private repository: CoursesRepository) {}

  async createCourse(courseData: { title: string; description?: string }) {
    // 1. Validation métier avec l'entité
    const entity = CourseEntity.create(
      courseData.title,
      courseData.description
    );

    if (!entity.canBePublished()) {
      return { data: null, error: new Error("Validation failed") };
    }

    // 2. Appel au repository
    return await this.repository.createCourse(fromCourseEntity(entity));
  }
}
```

### 3. Repository & Gateway (Infrastructure)

```typescript
// src/infrastructure/repositories/courses.repository.ts
export class CoursesRepositoryImpl implements CoursesRepository {
  constructor() {
    this.gateway = CoursesGateway.getInstance();
  }

  async getAllCourses() {
    return this.gateway.getAllCourses();
  }
}

// src/infrastructure/gateways/courses.gateway.ts
export class CoursesGateway {
  async getAllCourses() {
    const courses = await getAllCoursesService();
    // Conversion vers le modèle domain
    return { data: domainCourses };
  }
}
```

### 4. Presenter (État Zustand)

```typescript
// src/infrastructure/presenters/courses.presenter.ts
export const useCoursesPresenter = create<CoursesPresenterState>((set) => {
  const repository = createCoursesRepository();
  const useCase = new CoursesUseCase(repository);

  return {
    courses: [],
    isLoading: false,
    error: null,

    fetchCourses: async () => {
      set({ isLoading: true });
      const result = await useCase.getAllCourses();
      set({ courses: result.data, isLoading: false });
    },
  };
});
```

### 5. ViewModel (Logique de présentation)

```typescript
// src/userinterface/components/courses/CoursesViewModel.ts
export function useCoursesViewModel() {
  const { courses, isLoading, error, fetchCourses, createCourse } =
    useCoursesPresenter();

  const handleCreateCourse = async (title: string, description?: string) => {
    return await createCourse({ title, description });
  };

  return {
    courses,
    isLoading,
    hasError: !!error,
    handleCreateCourse,
  };
}
```

### 6. Component (UI)

```typescript
// src/userinterface/components/courses/CoursesList.tsx
export function CoursesList() {
  const { courses, isLoading, handleCreateCourse } = useCoursesViewModel();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>{course.title}</div>
      ))}
    </div>
  );
}
```

## Avantages

✅ **Séparation claire des responsabilités**

- Domain : logique métier pure
- Infrastructure : frameworks & outils
- UI : présentation uniquement

✅ **Testabilité maximale**

- Use cases testables sans Zustand/React
- Entities avec règles métier isolées
- Mocking facile des repositories

✅ **Indépendance des frameworks**

- Domain ne dépend de rien
- Peut changer Zustand → Redux facilement
- Infrastructure interchangeable

✅ **Injection de dépendances**

- IoC container pour la configuration
- Dépendances inversées (interfaces)

## Usage

1. Accéder à `/courses-example` pour voir l'exemple
2. Le composant `CoursesList` démontre l'usage complet
3. Toute la logique métier est dans `CoursesUseCase`
4. L'état est géré par `useCoursesPresenter` (Zustand)

## Tests

```typescript
// Tests des Use Cases (logique métier pure)
const mockRepository = {
  getAllCourses: jest.fn(),
};
const useCase = new CoursesUseCase(mockRepository);

// Tests des Entities (règles métier)
const entity = CourseEntity.create("Title", "Description");
expect(entity.canBePublished()).toBe(true);
```
