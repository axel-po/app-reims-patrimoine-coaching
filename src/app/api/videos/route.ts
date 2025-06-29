import { NextResponse } from "next/server";
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

export async function GET(): Promise<NextResponse> {
  try {
    // Check if all required environment variables are set
    const requiredEnvVars = [
      "CLOUDFLARE_ACCOUNT_ID",
      "CLOUDFLARE_R2_BUCKET_NAME",
      "CLOUDFLARE_R2_ACCESS_KEY_ID",
      "CLOUDFLARE_R2_SECRET_ACCESS_KEY",
    ];

    const missingVars = requiredEnvVars.filter(
      (varName) => !process.env[varName]
    );

    if (missingVars.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing environment variables",
          missingVars,
          timestamp: new Date().toISOString(),
        },
        { status: 500 }
      );
    }

    const accountId = process.env.CLOUDFLARE_ACCOUNT_ID!;
    const bucketName = process.env.CLOUDFLARE_R2_BUCKET_NAME!;

    const s3Client = new S3Client({
      region: "auto",
      endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY_ID!,
        secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY!,
      },
    });

    // List all objects in the bucket
    const command = new ListObjectsV2Command({
      Bucket: bucketName,
      MaxKeys: 100, // Limit to 100 objects for testing
    });

    const response = await s3Client.send(command);

    const videos =
      response.Contents?.map((obj) => ({
        key: obj.Key,
        size: obj.Size,
        lastModified: obj.LastModified,
        testUrl: `/api/videos/${obj.Key}`,
      })) || [];

    return NextResponse.json({
      success: true,
      totalVideos: videos.length,
      videos,
      bucketName,
      customDomain: process.env.CLOUDFLARE_R2_CUSTOM_DOMAIN || null,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Videos list error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
