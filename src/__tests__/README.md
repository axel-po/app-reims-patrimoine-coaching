# Strategy de Tests - Clean Architecture

## 🎯 Vue d'ensemble

Cette documentation présente la stratégie de tests mise en place pour respecter la **Clean Architecture** avec une couverture complète des **modules** et **lessons**.

## 📁 Structure des Tests

```
src/__tests__/
├── setup.ts                    # Configuration globale
├── domain/                     # Tests unitaires purs
│   ├── entities/
│   │   ├── module.entity.test.ts
│   │   └── lesson.entity.test.ts
│   └── usecases/
│       ├── modules.usecase.test.ts
│       └── lessons.usecase.test.ts
├── infrastructure/             # Tests d'intégration
│   ├── presenters/
│   │   ├── modules.presenter.test.ts
│   │   └── lessons.presenter.test.ts
│   └── repositories/
│       ├── modules.repository.test.ts (à créer)
│       └── lessons.repository.test.ts (à créer)
└── userinterface/             # Tests UI/ViewModels
    └── components/
        └── dashboard/
            ├── modules/
            │   └── ModulesViewModel.test.ts (à créer)
            └── lessons/
                └── LessonsViewModel.test.ts
```

## 🧪 Types de Tests par Couche

### 1. **Domain Layer** (Tests Unitaires Purs)

**Ce qu'on teste :**

- **Entities** : Logique métier, validations, méthodes utilitaires
- **UseCases** : Orchestration, gestion d'erreurs, règles business

**Exemples :**

```typescript
// ModuleEntity - Validations métier
describe("isValidModule", () => {
  it("should return false when title is empty");
  it("should return false when courseId is empty");
});

// ModulesUseCase - Gestion d'erreurs
describe("getAllModules", () => {
  it("should handle repository throwing exception");
  it("should return error when repository fails");
});
```

**Avantages :**

- Tests ultra-rapides (pas de dépendances externes)
- Logique métier pure testée isolément
- Couverture des cas edge facilement

### 2. **Infrastructure Layer** (Tests d'Intégration)

**Ce qu'on teste :**

- **Presenters** : Transformation des données
- **Repositories** : Accès données (avec mock DB)

**Exemples :**

```typescript
// ModulesPresenter - Transformation
describe("toPresentation", () => {
  it("should handle null description");
  it("should handle null duration");
});

// Repository (à créer) - Accès données
describe("ModulesRepository", () => {
  it("should return modules ordered by position");
  it("should handle database connection errors");
});
```

### 3. **UserInterface Layer** (Tests Comportementaux)

**Ce qu'on teste :**

- **ViewModels** : Logique de présentation, états, side-effects
- **Components** : Interactions utilisateur (à créer)

**Exemples :**

```typescript
// LessonsViewModel - Gestion d'état
describe("useModuleLessonsViewModel", () => {
  it("should not reload lessons if already loaded");
  it("should handle API error response");
});

// Component (à créer) - Comportement UI
describe("ModuleAccordion", () => {
  it("should stay open when lesson is selected");
  it("should auto-select first lesson on load");
});
```

## 🚀 Scripts de Test Disponibles

```bash
# Tests généraux
pnpm test              # Mode watch (développement)
pnpm test:run          # Exécution unique
pnpm test:coverage     # Avec couverture de code

# Tests par couche (Clean Architecture)
pnpm test:domain       # Domain layer uniquement
pnpm test:infrastructure # Infrastructure layer
pnpm test:ui           # UserInterface layer

# Tests par fonctionnalité
pnpm test:modules      # Tous les tests modules
pnpm test:lessons      # Tous les tests lessons
```

## ✅ Ce qui est Déjà Testé

### ✅ Domain Layer

- **ModuleEntity** : Toutes les méthodes métier (13 tests)
- **ModulesUseCase** : Orchestration et gestion d'erreurs (9 tests)

### ✅ Infrastructure Layer

- **ModulesPresenter** : Transformation de données (6 tests)

### ✅ UserInterface Layer

- **useModuleLessonsViewModel** : Logique de présentation (7 tests)

**Total actuel : 35 tests qui passent tous ✅**

## 🔄 Prochaines Étapes

### Tests à Ajouter

1. **Domain Layer**

   ```typescript
   // À créer
   src / __tests__ / domain / entities / lesson.entity.test.ts;
   src / __tests__ / domain / usecases / lessons.usecase.test.ts;
   ```

2. **Infrastructure Layer**

   ```typescript
   // À créer
   src / __tests__ / infrastructure / presenters / lessons.presenter.test.ts;
   src / __tests__ / infrastructure / repositories / modules.repository.test.ts;
   src / __tests__ / infrastructure / repositories / lessons.repository.test.ts;
   ```

3. **UserInterface Layer**
   ```typescript
   // À créer
   src /
     __tests__ /
     userinterface /
     components /
     dashboard /
     modules /
     ModulesViewModel.test.ts;
   src /
     __tests__ /
     userinterface /
     components /
     dashboard /
     modules /
     ModuleAccordion.test.tsx;
   src /
     __tests__ /
     userinterface /
     components /
     dashboard /
     lessons /
     LessonItem.test.tsx;
   ```

## 🏗️ Bonnes Pratiques

### 1. **Isolation**

- Chaque couche testée indépendamment
- Mocks pour les dépendances externes
- Tests unitaires sans side-effects

### 2. **Naming Convention**

```typescript
describe("ClassOrHook", () => {
  describe("methodName", () => {
    it("should do something when condition");
  });
});
```

### 3. **Structure AAA (Arrange-Act-Assert)**

```typescript
it('should load lessons successfully', async () => {
  // Arrange
  const mockData = [...]
  vi.mocked(api).mockResolvedValue(mockData)

  // Act
  const { result } = renderHook(() => useHook())

  // Assert
  expect(result.current.data).toEqual(mockData)
})
```

### 4. **Mocking Strategy**

- **Domain** : Pas de mocks (logique pure)
- **Infrastructure** : Mock DB/API calls
- **UI** : Mock actions et services

## 📊 Métriques de Succès

- **Couverture** : > 80% par couche
- **Performance** : < 1s pour tous les tests
- **Maintenabilité** : Tests lisibles et autonomes
- **Fiabilité** : Pas de tests flaky

## 🔧 Configuration

### Vitest Setup

```typescript
// vitest.config.ts
export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./src/__tests__/setup.ts"],
  },
});
```

### Mocks Globaux

```typescript
// src/__tests__/setup.ts
vi.mock("nuqs", () => ({
  useQueryState: vi.fn(() => [null, vi.fn()]),
}));
```

Cette stratégie garantit une base de tests solide et maintenable qui respecte les principes de la Clean Architecture ! 🎯
