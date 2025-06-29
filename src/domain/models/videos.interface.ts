export interface VideoReader {
  getVideoUrl(videoKey: string): Promise<string>;
}

export interface VideoPlayerProps {
  videoKey: string;
  title?: string;
  autoplay?: boolean;
  controls?: boolean;
}
