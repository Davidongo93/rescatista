module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['res.cloudinary.com'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 días
  },
  compress: true,
}
