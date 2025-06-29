export const MIN_LENGTH_TITLE = 3;
export const MAX_LENGTH_TITLE = 255;
export const MIN_LENGTH_DESCRIPTION = 10;
export const MAX_LENGTH_DESCRIPTION = 1000;

export class ModuleEntity {
  constructor(
    public readonly id: string,
    public readonly courseId: string,
    public readonly title: string,
    public readonly description: string | null,
    public readonly position: number,
    public readonly duration: string | null,
    public readonly createdAt: Date | null
  ) {}

  isValidModule(): boolean {
    return !!(this.title && this.title.length > 0 && this.courseId);
  }

  getDisplayTitle(): string {
    return this.title || "Untitled Module";
  }

  getDisplayDescription(): string {
    return this.description || "No description available";
  }

  getDurationDisplay(): string {
    return this.duration || "Duration not specified";
  }

  isRecent(): boolean {
    if (!this.createdAt) return false;
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    return this.createdAt > oneWeekAgo;
  }
}
