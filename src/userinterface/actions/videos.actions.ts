"use server";

import { getUser } from "@/lib/auth-server";

export async function getSecureVideoStreamUrlAction(videoKey: string) {
  try {
    // Check if user is authenticated
    const user = await getUser();

    if (!user) {
      return { error: "Unauthorized - Please log in to access videos" };
    }

    if (!videoKey) {
      return { error: "Video key is required" };
    }

    // Return the secure streaming endpoint URL
    const streamUrl = `/api/videos/stream/${encodeURIComponent(videoKey)}`;

    return { success: true, url: streamUrl };
  } catch (error) {
    console.error("Get secure video stream URL error:", error);
    return {
      error:
        error instanceof Error
          ? error.message
          : "Failed to get secure video stream URL",
    };
  }
}
