"use client";

import { useState, useEffect } from "react";
import { getSecureVideoStreamUrlAction } from "@/userinterface/actions/videos.actions";

interface VideoPlayerProps {
  videoKey: string;
  title?: string;
  className?: string;
}

export function VideoPlayer({
  videoKey,
  title,
  className = "",
}: VideoPlayerProps) {
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadVideo = async () => {
      if (!videoKey) {
        setError("No video available");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        // Use secure streaming endpoint - no URL expiration needed
        const result = await getSecureVideoStreamUrlAction(videoKey);

        if (result.success && result.url) {
          setVideoUrl(result.url);
        } else {
          setError(result.error || "Failed to load video");
        }
      } catch (err) {
        setError("Error loading video");
        console.error("Video loading error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadVideo();
  }, [videoKey]);

  if (loading) {
    return (
      <div
        className={`aspect-video bg-gray-100 rounded-lg flex items-center justify-center ${className}`}
      >
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-gray-600">Loading video...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={`aspect-video bg-gray-100 rounded-lg flex items-center justify-center ${className}`}
      >
        <div className="text-center">
          <div className="text-red-500 mb-2">⚠️</div>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`aspect-video rounded-lg overflow-hidden ${className}`}>
      <video
        src={videoUrl}
        controls
        preload="metadata"
        className="w-full h-full object-cover"
        title={title}
        // Prevent right-click download and other security measures
        controlsList="nodownload"
        onContextMenu={(e) => e.preventDefault()}
      >
        <p className="text-gray-600">
          Your browser doesn&apos;t support video playback.
        </p>
      </video>
    </div>
  );
}
