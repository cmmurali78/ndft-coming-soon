/**
 * Client for the Naturals ADFT operations portal public API.
 *
 * The operations portal (https://operations.naturalsadft.com) is where blogs and
 * certificates are managed. This site reads from its public, CORS-enabled routes.
 * Override the base URL with the PORTAL_API_URL env var (e.g. a local portal in dev).
 */
const PORTAL_API_URL = (
  process.env.PORTAL_API_URL ?? "https://operations.naturalsadft.com"
).replace(/\/+$/, "");

export type BlogListItem = {
  slug: string;
  title: string;
  category: string;
  date?: string;
  excerpt: string;
  thumbnail: string | null;
  views: number;
};

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogArticle = {
  slug: string;
  title: string;
  category: string;
  date?: string;
  excerpt: string;
  image: string | null;
  views: number;
  metaTitle: string | null;
  metaDescription: string | null;
  author: string;
  content: string;
  faqs?: BlogFaq[];
};

/** GET /api/public/blogs — published posts, newest first. Returns [] on any failure. */
export async function getBlogs(category?: string): Promise<BlogListItem[]> {
  const params = new URLSearchParams({ limit: "50" });
  if (category && category !== "All Categories") params.set("category", category);
  try {
    const res = await fetch(`${PORTAL_API_URL}/api/public/blogs?${params.toString()}`, {
      // Uncached: a blog published in the portal appears here on the next request.
      cache: "no-store",
    });
    if (!res.ok) return [];
    const json = (await res.json()) as { data?: BlogListItem[] };
    return Array.isArray(json?.data) ? json.data : [];
  } catch {
    return [];
  }
}

/** GET /api/public/blogs/[slug] — one published article, or null if missing/unreachable. */
export async function getBlog(slug: string): Promise<BlogArticle | null> {
  try {
    const res = await fetch(
      `${PORTAL_API_URL}/api/public/blogs/${encodeURIComponent(slug)}`,
      { cache: "no-store" }
    );
    if (!res.ok) return null;
    return (await res.json()) as BlogArticle;
  } catch {
    return null;
  }
}

export type CertificateResult = {
  valid: boolean;
  message?: string;
  data?: {
    name: string;
    course: string;
    issuedAt: string;
    code: string;
  };
};

/**
 * GET /api/verify/certificate/[code] — certificate lookup.
 * The portal's verify route is not CORS-enabled, so this runs server-side
 * (from a Next route handler in this site), never from the browser.
 */
export async function verifyCertificate(code: string): Promise<CertificateResult> {
  const trimmed = code.trim();
  if (!trimmed) return { valid: false, message: "Please enter a certificate ID." };
  try {
    const res = await fetch(
      `${PORTAL_API_URL}/api/verify/certificate/${encodeURIComponent(trimmed)}`,
      { cache: "no-store" }
    );
    const json = (await res.json().catch(() => null)) as CertificateResult | null;
    if (json && typeof json === "object" && "valid" in json) return json;
    return { valid: false, message: "No matching certificate was found." };
  } catch {
    return { valid: false, message: "Unable to reach the verification server. Please try again later." };
  }
}
