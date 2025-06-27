import React from "react";

interface ModuleHeaderProps {
  title: string;
  duration: string;
}

export default function ModuleHeader({ title, duration }: ModuleHeaderProps) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-3">
        <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
        <span>{title}</span>
      </div>
      <span className="text-xs text-slate-500 mr-4">{duration}</span>
    </div>
  );
}
