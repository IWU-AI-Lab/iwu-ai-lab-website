/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // Exports /about as /about/index.html — required for S3 static hosting
  images: { unoptimized: true }, // Required for static export
};

export default nextConfig;
