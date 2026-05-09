# Deployment Guide

The website is deployed to AWS S3 + CloudFront with automatic updates via GitHub Actions.

## One-Time AWS Setup

### 1. Create S3 Bucket

1. Go to **AWS S3** console
2. Create a new bucket: `ailab-website` (or your preferred name)
3. In bucket settings, enable **Static website hosting**
   - Index document: `index.html`
   - Error document: `404.html`
4. **Block public access** settings: Allow public access (uncheck all blocks)
5. In **Bucket Policy**, add:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicRead",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::ailab-website/*"
       }
     ]
   }
   ```

### 2. Create CloudFront Distribution

1. Go to **CloudFront** console
2. Create distribution pointing to your S3 bucket
3. Under **Alternate domain names**, add your custom domain (e.g., `ailab.edu`)
4. Request **SSL certificate** via ACM (free) for your domain
5. Note your **Distribution ID** (you'll need this for GitHub Actions)

### 3. Set Up Custom Domain

Point your domain's DNS to CloudFront:
- Get your CloudFront domain (e.g., `d12345.cloudfront.net`)
- Create a **CNAME** or **ALIAS** record pointing to it

## GitHub Actions Automation

The workflow file `.github/workflows/deploy.yml` automatically:
1. Builds the Next.js site for static export
2. Uploads it to S3
3. Invalidates the CloudFront cache

### Required GitHub Secrets

Add these to your GitHub repo settings (**Settings > Secrets > Actions**):

- `AWS_ACCESS_KEY_ID` — AWS access key
- `AWS_SECRET_ACCESS_KEY` — AWS secret key
- `AWS_S3_BUCKET` — Your bucket name (e.g., `ailab-website`)
- `AWS_CLOUDFRONT_DISTRIBUTION_ID` — Your CloudFront distribution ID

### Deploy Manually (if needed)

```bash
npm run build
aws s3 sync out/ s3://ailab-website --delete
aws cloudfront create-invalidation --distribution-id <ID> --paths "/*"
```

## Environment Variables

If your site needs env vars, add them to `.env.local` locally. For production, add them to GitHub Secrets or AWS.
