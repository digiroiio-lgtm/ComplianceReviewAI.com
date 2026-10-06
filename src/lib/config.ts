/**
 * Central site configuration. Everything environment-specific lives here.
 * NEXT_PUBLIC_* values are inlined at build time, so they must be referenced
 * with the literal `process.env.NEXT_PUBLIC_*` form.
 */

export const SITE_NAME = "ComplianceReviewAI.com";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://compliancereviewai.com"
).replace(/\/+$/, "");

/**
 * Destination of the sitewide domain-sale banner. Single source of truth.
 * Falls back to the internal /domain page when the env var is not set.
 */
export const DOMAIN_SALE_URL =
  process.env.NEXT_PUBLIC_DOMAIN_SALE_URL?.trim() || "/domain";

/**
 * Contact method for the "Make an Inquiry" button on /domain.
 * Placeholder only: replace via env var before launch. example.com is a
 * reserved domain, so a placeholder can never reach a real third party.
 */
export const DOMAIN_CONTACT_URL =
  process.env.NEXT_PUBLIC_DOMAIN_CONTACT_URL?.trim() || "mailto:contact@example.com";

/** ISO date the editorial content was last reviewed. */
export const CONTENT_UPDATED = "2026-10-06";

export const SITE_DESCRIPTION =
  "Educational guides to AI-powered compliance review: what it is, where AI fits, how to evaluate compliance review software, and how it applies across use cases and industries.";

export const DISCLAIMER =
  "This website provides educational information and does not constitute legal, regulatory or professional compliance advice.";
