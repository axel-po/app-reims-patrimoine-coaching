export interface VideoReader {
  getVideoUrl(videoKey: string): Promise<string>;
  getSignedVideoUrl(
    videoKey: string,
    expiresInMinutes: number
  ): Promise<string>;
}

export interface VideoPlayerProps {
  videoKey: string;
  title?: string;
  autoplay?: boolean;
  controls?: boolean;
}
