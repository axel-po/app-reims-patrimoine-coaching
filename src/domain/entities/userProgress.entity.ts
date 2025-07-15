export class UserProgressEntity {
  constructor(
    public readonly id: number,
    public readonly userId: string,
    public readonly lessonId: string,
    public readonly completed: boolean,
    public readonly completedAt: Date | null
  ) {}

  isCompleted(): boolean {
    return this.completed;
  }

  getCompletionDate(): Date | null {
    return this.completedAt;
  }

  markAsCompleted(): UserProgressEntity {
    return new UserProgressEntity(
      this.id,
      this.userId,
      this.lessonId,
      true,
      new Date()
    );
  }

  markAsIncomplete(): UserProgressEntity {
    return new UserProgressEntity(
      this.id,
      this.userId,
      this.lessonId,
      false,
      null
    );
  }

  static createNew(
    userId: string,
    lessonId: string
  ): Pick<
    UserProgressEntity,
    "userId" | "lessonId" | "completed" | "completedAt"
  > {
    return {
      userId,
      lessonId,
      completed: false,
      completedAt: null,
    };
  }
}
