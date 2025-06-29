import { Module } from "@/domain/models/modules.interface";

export interface ModulePresentation {
  id: string;
  courseId: string;
  title: string;
  description: string;
  position: number;
  duration: string;
  createdAt: string;
}

export class ModulesPresenter {
  static toPresentation(module: Module): ModulePresentation {
    return {
      id: module.id,
      courseId: module.courseId,
      title: module.title,
      description: module.description || "No description available",
      position: module.position,
      duration: module.duration || "Duration not specified",
      createdAt: module.createdAt?.toISOString() || "",
    };
  }

  static toPresentationList(modules: Module[]): ModulePresentation[] {
    return modules.map(this.toPresentation);
  }
}
