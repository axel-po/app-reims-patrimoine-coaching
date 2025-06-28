// Cloudflare R2 service (S3-compatible storage)
const R2_BUCKET = process.env.CLOUDFLARE_R2_BUCKET!;
const PUBLIC_DOMAIN = process.env.CLOUDFLARE_R2_PUBLIC_DOMAIN; // Custom domain for public access

export class CloudflareR2Service {
  // Get public URL for video (assumes bucket is public or using custom domain)
  static getVideoUrl(key: string) {
    return PUBLIC_DOMAIN
      ? `https://${PUBLIC_DOMAIN}/${key}`
      : `https://${R2_BUCKET}.r2.dev/${key}`; // Use R2.dev subdomain if no custom domain
  }

  // Generate key for video (if needed for manual uploads)
  static generateVideoKey(fileName: string) {
    const timestamp = Date.now();
    const cleanName = fileName.replace(/[^a-zA-Z0-9.-]/g, "_");
    return `videos/${timestamp}-${cleanName}`;
  }
}
