import React from "react";
import { Button } from "@/components/ui/button";
import { Play, Settings } from "lucide-react";

interface VideoPlayerProps {
  videoTitle?: string;
}

export default function VideoPlayer({
  videoTitle = "epargne-precaution-bases.mp4",
}: VideoPlayerProps) {
  return (
    <div className="flex-1 flex items-center justify-center mb-6">
      <div className="w-full max-w-4xl">
        <div className="relative aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              size="lg"
              className="w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110"
            >
              <Play className="h-8 w-8 text-white ml-1" />
            </Button>
          </div>

          {/* Video overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

          {/* Video filename */}
          <div className="absolute top-4 left-4">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
              <span className="text-white text-sm font-medium">
                {videoTitle}
              </span>
            </div>
          </div>

          {/* Controls */}
          <div className="absolute top-4 right-4 flex gap-2">
            <Button
              size="sm"
              variant="ghost"
              className="text-white hover:bg-white/20 h-9 w-9 p-0 rounded-lg backdrop-blur-sm border border-white/10"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 3H5C3.89543 3 3 3.89543 3 5V8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 8V5C21 3.89543 20.1046 3 19 3H16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 21H19C20.1046 21 21 20.1046 21 19V16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 16V19C3 20.1046 3.89543 21 5 21H8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="text-white hover:bg-white/20 h-9 w-9 p-0 rounded-lg backdrop-blur-sm border border-white/10"
            >
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
