"use server";

import { getVideosUseCase } from "@/di/videos.ioc";

export async function getVideoStreamUrlAction(videoKey: string) {
  try {
    if (!videoKey) {
      return { error: "Video key is required" };
    }

    const videosUseCase = getVideosUseCase();
    const url = await videosUseCase.getVideoStreamUrl(videoKey);

    return { success: true, url };
  } catch (error) {
    console.error("Get video URL error:", error);
    return {
      error: error instanceof Error ? error.message : "Failed to get video URL",
    };
  }
}
