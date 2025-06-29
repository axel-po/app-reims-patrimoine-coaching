import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { VideoReader } from "@/domain/models/videos.interface";

export class VideosRepository implements VideoReader {
  private s3Client: S3Client;
  private bucketName: string;
  private accountId: string;

  constructor() {
    this.accountId = process.env.CLOUDFLARE_ACCOUNT_ID!;
    this.bucketName = process.env.CLOUDFLARE_R2_BUCKET_NAME!;

    this.s3Client = new S3Client({
      region: "auto",
      endpoint: `https://${this.accountId}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY_ID!,
        secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY!,
      },
    });
  }

  async getVideoUrl(videoKey: string): Promise<string> {
    // If custom domain is configured, use direct access
    if (process.env.CLOUDFLARE_R2_CUSTOM_DOMAIN) {
      return `https://${process.env.CLOUDFLARE_R2_CUSTOM_DOMAIN}/${videoKey}`;
    }

    // Otherwise generate signed URL (expires in 8 hours)
    const command = new GetObjectCommand({
      Bucket: this.bucketName,
      Key: videoKey,
    });

    return await getSignedUrl(this.s3Client, command, { expiresIn: 28800 });
  }

  async getSignedVideoUrl(
    videoKey: string,
    expiresInMinutes: number
  ): Promise<string> {
    const command = new GetObjectCommand({
      Bucket: this.bucketName,
      Key: videoKey,
    });

    // Convert minutes to seconds
    const expiresInSeconds = expiresInMinutes * 60;

    return await getSignedUrl(this.s3Client, command, {
      expiresIn: expiresInSeconds,
    });
  }
}
