import { NextRequest, NextResponse } from "next/server";
import { getVideosUseCase } from "@/di/videos.ioc";

export async function GET(
  request: NextRequest,
  { params }: { params: { videoKey: string } }
): Promise<NextResponse> {
  try {
    const { videoKey } = params;

    if (!videoKey) {
      return NextResponse.json(
        { error: "Video key is required" },
        { status: 400 }
      );
    }

    const videosUseCase = getVideosUseCase();

    // Get the video URL
    const videoUrl = await videosUseCase.getVideoStreamUrl(videoKey);

    // Return debug information
    return NextResponse.json({
      success: true,
      videoKey,
      videoUrl,
      timestamp: new Date().toISOString(),
      config: {
        hasCustomDomain: !!process.env.CLOUDFLARE_R2_CUSTOM_DOMAIN,
        customDomain: process.env.CLOUDFLARE_R2_CUSTOM_DOMAIN || null,
        accountId: process.env.CLOUDFLARE_ACCOUNT_ID ? "configured" : "missing",
        bucketName: process.env.CLOUDFLARE_R2_BUCKET_NAME
          ? "configured"
          : "missing",
        accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY_ID
          ? "configured"
          : "missing",
        secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY
          ? "configured"
          : "missing",
      },
    });
  } catch (error) {
    console.error("Video API error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
        videoKey: params.videoKey,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
