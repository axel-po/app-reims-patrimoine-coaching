import { VideoReader } from "../models/videos.interface";

export class VideosUseCase {
  constructor(private videoReader: VideoReader) {}

  async getVideoStreamUrl(videoKey: string): Promise<string> {
    if (!videoKey || videoKey.trim() === "") {
      throw new Error("Video key is required");
    }

    return await this.videoReader.getVideoUrl(videoKey);
  }

  async getSignedVideoUrl(
    videoKey: string,
    expiresInMinutes: number = 60
  ): Promise<string> {
    if (!videoKey || videoKey.trim() === "") {
      throw new Error("Video key is required");
    }

    // Generate signed URL that expires in specified minutes
    const signedUrl = await this.videoReader.getSignedVideoUrl(
      videoKey,
      expiresInMinutes
    );
    return signedUrl;
  }

  // Helper to extract video key from full URL if needed
  extractVideoKey(videoUrl: string): string {
    if (videoUrl.includes("://")) {
      // Extract key from full URL
      const url = new URL(videoUrl);
      return url.pathname.substring(1); // Remove leading slash
    }
    return videoUrl; // Already a key
  }
}
