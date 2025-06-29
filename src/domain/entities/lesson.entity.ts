export const MIN_LENGTH_TITLE = 3;
export const MAX_LENGTH_TITLE = 255;
export const MIN_LENGTH_DURATION = 1;
export const MAX_LENGTH_DURATION = 20;

export class LessonEntity {
  constructor(
    public readonly id: string,
    public readonly moduleId: string,
    public readonly title: string,
    public readonly videoUrl: string | null,
    public readonly textContent: string | null,
    public readonly documentUrl: string | null,
    public readonly duration: string,
    public readonly position: number,
    public readonly createdAt: Date | null
  ) {}

  isValidLesson(): boolean {
    return !!(this.title && this.title.length > 0 && this.duration);
  }

  getDisplayTitle(): string {
    return this.title || "Untitled Lesson";
  }

  getDisplayDuration(): string {
    return this.duration || "0:00";
  }

  hasVideo(): boolean {
    return !!(this.videoUrl && this.videoUrl.length > 0);
  }

  hasTextContent(): boolean {
    return !!(this.textContent && this.textContent.length > 0);
  }

  hasDocument(): boolean {
    return !!(this.documentUrl && this.documentUrl.length > 0);
  }

  getContentTypes(): string[] {
    const types = [];
    if (this.hasVideo()) types.push("video");
    if (this.hasTextContent()) types.push("text");
    if (this.hasDocument()) types.push("document");
    return types;
  }

  isRecent(): boolean {
    if (!this.createdAt) return false;
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    return this.createdAt > oneWeekAgo;
  }
}
