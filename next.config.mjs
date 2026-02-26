import { withPayload } from "@payloadcms/next/withPayload";
import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Enable Next.js 16 Cache Components (Unlocks "use cache" and cacheTag)
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images-na.ssl-images-amazon.com",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/**",
      },
    ],
  },
};

// 2. Wrap with Payload CMS
// (Including the Turbopack dev optimization we discussed!)
const payloadConfig = withPayload(nextConfig, {
  devBundleServerPackages: false,
});

// 3. Wrap with Sentry
// (Sentry wraps the final configuration to ensure source maps are uploaded correctly)
export default withSentryConfig(payloadConfig, {
  org: "sauravs-stuff",
  project: "homepage",

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  tunnelRoute: "/monitoring",

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors.
  automaticVercelMonitors: true,
});