import { NextRequest, NextResponse } from "next/server";
import { CloudflareR2Service } from "@/services/cloudflare-r2-service";

// Get video info only
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const key = searchParams.get("key");

    if (!key) {
      return NextResponse.json(
        { error: "Video key required" },
        { status: 400 }
      );
    }

    const url = CloudflareR2Service.getVideoUrl(key);

    return NextResponse.json({
      key,
      url,
      exists: true, // You'd check this with HEAD request in production
    });
  } catch (error) {
    console.error("Get video error:", error);
    return NextResponse.json({ error: "Failed to get video" }, { status: 500 });
  }
}
