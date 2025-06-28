import React from "react";

interface VideoPlayerProps {
  videoUrl?: string;
  videoTitle?: string;
  videoKey?: string;
}

export default function VideoPlayer({
  videoUrl,
  videoTitle = "Vidéo de formation",
  videoKey,
}: VideoPlayerProps) {
  // TODO: Replace with actual R2 URL
  const finalVideoUrl =
    videoUrl ||
    (videoKey
      ? `https://your-r2-domain.com/${videoKey}`
      : "/placeholder-video.mp4");

  return (
    <div className="flex-1 flex items-center justify-center mb-6">
      <div className="w-full max-w-4xl">
        <div className="relative aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
          <video
            className="w-full h-full object-cover"
            controls
            preload="metadata"
            controlsList="nodownload" // Prevent download if needed
          >
            <source src={finalVideoUrl} type="video/mp4" />
            <source
              src={finalVideoUrl.replace(".mp4", ".webm")}
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>

          {/* Video title overlay */}
          <div className="absolute top-4 left-4 opacity-0 hover:opacity-100 transition-opacity">
            <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
              <span className="text-white text-sm font-medium">
                {videoTitle}
              </span>
            </div>
          </div>

          {/* Loading state overlay (optional) */}
          <div
            className="absolute inset-0 bg-slate-900/50 flex items-center justify-center opacity-0 pointer-events-none transition-opacity"
            id="video-loading"
          >
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
