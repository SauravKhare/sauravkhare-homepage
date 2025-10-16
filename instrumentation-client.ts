import * as Sentry from "@sentry/nextjs";
import posthog from 'posthog-js'

Sentry.init({
  dsn: "https://28737dcdd67117a5bfc6980bc66c30d8@o4509499209547776.ingest.us.sentry.io/4509499317616640",

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
  enabled: process.env.NODE_ENV === "production",
});

if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
    defaults: '2025-05-24'
  });
}

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;