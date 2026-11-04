/**
 * Supabase Migration: Editable sub-company navigation link
 *
 * Adds a `nav_url` column to public.landing_companies so an admin can edit
 * where each company's entry in the landing-page side menu (hamburger nav)
 * links to, from admin → Content → (company form) → "Navigation link".
 *
 * Previously the link was hardcoded to `/<slug>` in
 * src/components/landing/navbar.tsx. The app now reads nav_url from the CMS
 * content and falls back to `/<slug>` when it is empty, so existing behaviour
 * is unchanged until an admin sets a value. The value may be an internal path
 * ("/hiterratech") or an absolute external URL ("https://example.com").
 *
 * Row shape stays in sync with LandingCompanyRow in src/types/landing.ts and
 * the landing_companies type in src/types/database.ts.
 *
 * Run in the Supabase SQL Editor or via the Management API.
 */

-- ---------------------------------------------------------------------------
-- 1. Add the nav_url column (nullable; empty/NULL means "use /<slug>")
-- ---------------------------------------------------------------------------
ALTER TABLE public.landing_companies
  ADD COLUMN IF NOT EXISTS nav_url TEXT;

COMMENT ON COLUMN public.landing_companies.nav_url IS 'Side-menu link target for this company. Internal path (/slug) or absolute URL. NULL/empty falls back to /<slug> in code.';

-- ---------------------------------------------------------------------------
-- 2. Seed existing rows with their current implicit link (/<slug>)
-- ---------------------------------------------------------------------------
-- Only backfills rows that have no value yet, so re-running is safe.
UPDATE public.landing_companies
  SET nav_url = '/' || slug
  WHERE nav_url IS NULL;
