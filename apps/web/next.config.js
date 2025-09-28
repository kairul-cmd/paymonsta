const { withBaml } = require('@boundaryml/baml-nextjs-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@paymonsta/baml'],
  // Required for pdf-parse in Next.js App Router
  serverExternalPackages: ['pdf-parse'],
  // Turbopack configuration (moved from experimental.turbo in Next.js 15)
  turbopack: {
    // We can add specific turbopack config here if needed
    // For now, we'll rely on --turbo flag to enable/disable
  },
}

module.exports = withBaml()(nextConfig)
