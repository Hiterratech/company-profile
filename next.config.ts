import type { NextConfig } from 'next';
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';

/**
 * Allow next/image to load CMS media from the Supabase Storage public bucket.
 * Derived from NEXT_PUBLIC_SUPABASE_URL so it works across environments; when
 * the env var is missing or malformed no remote pattern is added and only
 * local /assets images are permitted.
 */
function supabaseRemotePatterns(): NonNullable<NextConfig['images']>['remotePatterns'] {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!supabaseUrl) return [];
  try {
    const { protocol, hostname, port } = new URL(supabaseUrl);
    return [
      {
        protocol: protocol === 'http:' ? 'http' : 'https',
        hostname,
        port,
        pathname: '/storage/v1/object/public/**',
      },
    ];
  } catch {
    return [];
  }
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: supabaseRemotePatterns(),
  },
};

export default nextConfig;

// Enables Cloudflare bindings (R2, KV, etc.) during `next dev` only.
// Must NOT run during `next build`: it boots Miniflare (workerd), which
// contends on the local SQLite state and crashes the production build.
// `next dev` sets NODE_ENV=development; the adapter's own build runs with
// production, so this guard scopes the dev integration correctly.
if (process.env.NODE_ENV === 'development') {
  initOpenNextCloudflareForDev();
}
