# Deployment Guide

The site is statically exported from Next.js and hosted on **AWS S3 + CloudFront** (region: `us-east-2`), with DNS managed via **Route 53** and automatic deploys via **GitHub Actions** on every push to `main`.

---

## Prerequisites

- **Node.js** `>= 20.9.0` — required by Next.js
- Access to the AWS console as an IAM user with permissions for S3, CloudFront, and Route 53
- **GitHub** admin access to configure repository secrets

---

## One-Time AWS Setup

### 1. Create an S3 Bucket

1. In the AWS console, navigate to **S3** → **Create bucket**.
2. Set **Bucket name** (e.g., `indwes-ai-lab`) and **Region** to `us-east-2`.
3. Under **Block Public Access settings**, **uncheck** "Block all public access" and confirm the warning.
4. Click **Create bucket**.
5. Open the bucket → **Properties** tab → **Static website hosting** → **Edit**.
   - Enable it, set **Index document**: `index.html`, **Error document**: `404.html` → **Save changes**.
6. **Permissions** tab → **Bucket policy** → **Edit**, paste the policy below → **Save changes**:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicRead",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::indwes-ai-lab/*"
    }
  ]
}
```

> Replace `indwes-ai-lab` with the actual bucket name if different.

---

### 2. Create a CloudFront Distribution

1. Navigate to **CloudFront** → **Create distribution**.
2. **Choose plan**: select **Standard** (the default) → click **Get started**.
3. **Origin domain**: use the S3 bucket's *static website endpoint* (e.g., `indwes-ai-lab.s3-website.us-east-2.amazonaws.com`). Do **not** use the S3 REST endpoint.
3. **Viewer protocol policy**: `Redirect HTTP to HTTPS`.
4. Under **Settings**:
   - **Alternate domain name (CNAME)**: add your custom domain (e.g., `indwesailab.com`)
   - **Custom SSL certificate**: click **Create certificate** → choose the wildcard (`*.indwesailab.com`) for maximum flexibility:
     1. ACM opens in a new tab — leave validation as **DNS validation** → **Request**
     2. On the next screen, click **Create records in Route 53** (auto-validates since your DNS is in Route 53)
     3. Wait ~1–2 min for status to change to **Issued**
     4. Back on the CloudFront tab, click **Refresh certificates** and select the new cert
   - **Default root object**: `index.html`

> ⚠️ ACM certificates for CloudFront **must** live in `us-east-1` — AWS enforces this regardless of where your S3 bucket is. The CloudFront wizard handles this automatically.
5. Click **Create distribution**.
6. Note the **Distribution ID** (e.g., `E1ABCDEF12345`) — needed later.

---

### 3. Point the Domain to CloudFront (Route 53)

Since you're using Route 53 for DNS, everything stays in AWS:

1. Navigate to **Route 53** → **Hosted zones** → click your domain.
2. Click **Create record**.
3. Configure the record:
   - **Record name**: subdomain only (e.g., `ailab` for `ailab.iwu.edu`), or leave blank for apex
   - **Record type**: `A`
   - Toggle **Alias** on
   - **Route traffic to**: `Alias to CloudFront distribution`
   - Select your CloudFront distribution from the dropdown
4. Click **Create records**.

> Route 53 ALIAS records work natively with CloudFront and are free for queries within AWS — no CNAME needed.

---

### 4. Generate AWS Access Keys for GitHub Actions

Since you are already an IAM user, generate access keys for your own account:

1. Navigate to **IAM** → **Users** → click your username.
2. Go to the **Security credentials** tab → **Create access key**.
3. Choose **Application running outside AWS** → **Next** → **Create access key**.
4. **Copy the Access Key ID and Secret Access Key** — the secret is only shown once.

> If you don't have permission to do this, ask your professor to generate the keys for your IAM user.

---

## GitHub Actions Setup

The workflow at `.github/workflows/deploy.yml` runs on every push to `main` and:
1. Builds the Next.js static export (`npm run build` → outputs to `out/`)
2. Syncs `out/` to S3
3. Invalidates the CloudFront cache

### Add Repository Secrets

1. GitHub repo → **Settings** → **Secrets and variables** (left sidebar) → **Actions**.
2. Click **New repository secret** for each:

| Secret name | Value |
|---|---|
| `AWS_ACCESS_KEY_ID` | Access key ID (from step 4) |
| `AWS_SECRET_ACCESS_KEY` | Secret access key (from step 4) |
| `AWS_S3_BUCKET` | S3 bucket name |
| `AWS_CLOUDFRONT_DISTRIBUTION_ID` | CloudFront distribution ID |

---

## Triggering a Deploy

- **Automatic**: push or merge a PR to `main`.
- **Manual**: **Actions** tab → **Deploy to AWS S3** → **Run workflow** → **Run workflow**.

Check status: **Actions** tab → click the latest run to view per-step logs.

---

## Manual Deploy (CLI)

Requires the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) configured with your credentials:

```bash
npm run build
aws s3 sync out/ s3://indwes-ai-lab --delete
aws cloudfront create-invalidation --distribution-id <DISTRIBUTION_ID> --paths "/*"
```

---

## Environment Variables

- **Local**: add to `.env.local` (not committed).
- **Production**: add as GitHub Actions secrets and reference in `.github/workflows/deploy.yml` under `env:`.
