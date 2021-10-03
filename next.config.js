/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  env: {
    siteMeta: {
      url: process.env.SITE_URL || 'http://localhost:3000',
      title: 'Headunit',
      description: 'Headless Content Management System powered by AppWrite',
      imageUrl: '/images/og-image.png'
    },
    APPWRITE_ENDPOINT: process.env.APPWRITE_ENDPOINT,
    APPWRITE_PROJECT_ID: process.env.APPWRITE_PROJECT_ID,
    APPWRITE_API_KEY: process.env.APPWRITE_API_KEY
  },
  images: {
    domains: ['images.unsplash.com', 'shuffle.dev']
  },
  eslint: {
    dirs: ['src']
  }
}

module.exports = nextConfig
