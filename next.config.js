/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: { typedRoutes: true },
  images: { formats: ['image/avif', 'image/webp'] },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          ...(process.env.NODE_ENV === 'production'
            ? [{ key: 'Content-Security-Policy', value: "default-src 'self'; img-src 'self' data: blob:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; connect-src 'self'" }]
            : []),
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'geolocation=(), camera=(), microphone=()' }
        ]
      }
    ];
  }
};

module.exports = nextConfig;


