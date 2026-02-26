/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  devIndicators: false,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
