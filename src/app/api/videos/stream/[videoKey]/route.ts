import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth-server";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

export async function GET(
  request: NextRequest,
  { params }: { params: { videoKey: string } }
): Promise<NextResponse> {
  try {
    // Check if user is authenticated
    const session = await getSession();

    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized - Please log in to access videos" },
        { status: 401 }
      );
    }

    const { videoKey } = params;

    if (!videoKey) {
      return NextResponse.json(
        { error: "Video key is required" },
        { status: 400 }
      );
    }

    // Block direct browser access - only allow video element requests
    const secFetchDest = request.headers.get("sec-fetch-dest");
    const referer = request.headers.get("referer");

    // Must be either a video request or have proper referer
    if (secFetchDest !== "video" && !referer) {
      return NextResponse.json(
        { error: "Direct access to video streams is not allowed" },
        { status: 403 }
      );
    }

    // Check referer to prevent hot-linking
    const host = request.headers.get("host");
    const allowedOrigins = [
      host ? `https://${host}` : null,
      host ? `http://${host}` : null,
      process.env.NEXTAUTH_URL,
    ].filter(Boolean) as string[];

    if (
      referer &&
      !allowedOrigins.some((allowed) => referer.startsWith(allowed))
    ) {
      return NextResponse.json(
        { error: "Access denied - Invalid referer" },
        { status: 403 }
      );
    }

    // Initialize S3 client for Cloudflare R2
    const s3Client = new S3Client({
      region: "auto",
      endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY_ID!,
        secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY!,
      },
    });

    // Handle Range requests for video seeking
    const range = request.headers.get("range");

    const command = new GetObjectCommand({
      Bucket: process.env.CLOUDFLARE_R2_BUCKET_NAME!,
      Key: videoKey,
      ...(range && { Range: range }),
    });

    const response = await s3Client.send(command);

    if (!response.Body) {
      return NextResponse.json({ error: "Video not found" }, { status: 404 });
    }

    // Convert the stream to a Response with security headers
    const headers: Record<string, string> = {
      "Content-Type": response.ContentType || "video/mp4",
      "Cache-Control": "private, no-cache, no-store, must-revalidate",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "SAMEORIGIN",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "X-Robots-Tag": "noindex, nofollow, nosnippet, noarchive",
      "Content-Disposition": "inline",
    };

    // Handle partial content for video seeking
    if (range && response.ContentRange) {
      headers["Content-Range"] = response.ContentRange;
      headers["Accept-Ranges"] = "bytes";
      headers["Content-Length"] = response.ContentLength?.toString() || "0";

      return new NextResponse(response.Body as ReadableStream, {
        status: 206, // Partial Content
        headers,
      });
    }

    if (response.ContentLength) {
      headers["Content-Length"] = response.ContentLength.toString();
      headers["Accept-Ranges"] = "bytes";
    }

    return new NextResponse(response.Body as ReadableStream, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error("Video streaming error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Streaming error",
        videoKey: params.videoKey,
      },
      { status: 500 }
    );
  }
}
