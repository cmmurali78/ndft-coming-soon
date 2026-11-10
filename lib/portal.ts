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
    certificationTitle?: string;
    dateOfCompletion?: string;
  };
};

export type StudentVerifyData = {
  studentCode: string;
  studentName: string;
  firstName: string;
  lastName: string | null;
  email: string;
  phone: string;
  dateOfBirth: string | null;
  gender: string | null;
  photoUrl: string | null;
  address: {
    line1: string | null; line2: string | null; city: string | null;
    district: string | null; state: string | null; country: string | null; pincode: string | null;
  };
  academic: {
    highestQualification: string | null; institutionName: string | null;
    yearOfPassing: number | null; disciplineStream: string | null;
  };
  guardian: { name: string | null; phone: string | null };
  certificate: {
    certificateId: string; certificationTitle: string; issuedAt: string;
    dateOfCompletion: string; fileUrl: string | null; status: string;
  };
  course: {
    courseName: string; courseCode: string; duration: string | null;
    description: string | null; skills: string | null; keyCompetencies: string | null;
  };
  enrollment: {
    enrollmentDate: string | null; expectedCompletionDate: string | null;
    trainingMode: string | null; status: string | null; batchName: string;
    batchStartDate: string | null; batchEndDate: string | null;
  };
  center: {
    name: string | null; centerCode: string; city: string | null;
    district: string | null; state: string | null;
  };
};

export type StudentVerifyResult = {
  valid: boolean;
  message?: string;
  data?: StudentVerifyData;
};

/**
 * GET /api/public/verify/[code] — student verification by encrypted student code (from QR).
 */
export async function verifyStudent(code: string): Promise<StudentVerifyResult> {
  const trimmed = code.trim();
  if (!trimmed) return { valid: false, message: "Invalid verification code." };
  try {
    const res = await fetch(
      `${PORTAL_API_URL}/api/public/verify/${encodeURIComponent(trimmed)}`,
      { cache: "no-store" }
    );
    const json = (await res.json().catch(() => null)) as StudentVerifyResult | null;
    if (json && typeof json === "object" && "valid" in json) return json;
    return { valid: false, message: "No matching student record was found." };
  } catch {
    return { valid: false, message: "Unable to reach the verification server. Please try again later." };
  }
}

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
