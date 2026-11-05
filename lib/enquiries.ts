/**
 * Submits the site's enquiry forms to the Naturals ADFT operations portal.
 *
 * These run in the browser (the forms are client components), so the request is
 * cross-origin to the portal. The portal's `/api/public/*` routes are CORS-enabled.
 * Submissions appear in the portal admin under Enquiries (General / Course /
 * Franchise) immediately.
 *
 * Base URL defaults to production; override with NEXT_PUBLIC_PORTAL_API_URL
 * (e.g. http://localhost:3000) to test against a local portal. It must be a
 * NEXT_PUBLIC_ var so the value is available in the browser bundle.
 */
const PORTAL_API_URL = (
  process.env.NEXT_PUBLIC_PORTAL_API_URL ?? "https://operations.naturalsadft.com"
).replace(/\/+$/, "");

export type EnquiryResult =
  | { ok: true; ticketId: string }
  | { ok: false; message: string; fieldErrors?: Record<string, string[]> };

async function postEnquiry(
  path: string,
  body: Record<string, unknown>
): Promise<EnquiryResult> {
  try {
    const res = await fetch(`${PORTAL_API_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const json = (await res.json().catch(() => ({}))) as {
      success?: boolean;
      ticketId?: string;
      error?: unknown;
    };

    if (res.ok && json?.success && json.ticketId) {
      return { ok: true, ticketId: json.ticketId };
    }
    if (res.status === 400 && json?.error && typeof json.error === "object") {
      return {
        ok: false,
        message: "Please check the highlighted fields and try again.",
        fieldErrors: json.error as Record<string, string[]>,
      };
    }
    if (res.status === 429) {
      return { ok: false, message: "Too many attempts. Please try again in a minute." };
    }
    return { ok: false, message: "Sorry, something went wrong. Please try again in a moment." };
  } catch {
    return { ok: false, message: "Network error. Please check your connection and try again." };
  }
}

/** Keep only digits so free-text age fields ("30 years") pass the portal's numeric check. */
function digits(value: unknown): string | undefined {
  const d = String(value ?? "").replace(/\D/g, "");
  return d || undefined;
}

function compose(lines: Array<string | null | undefined>): string | undefined {
  const text = lines.filter(Boolean).join("\n");
  return text || undefined;
}

/** "Get in touch" contact form → General enquiry. */
export function submitGeneralEnquiry(data: Record<string, string>): Promise<EnquiryResult> {
  const name = [data.firstName, data.lastName].filter(Boolean).join(" ").trim();
  return postEnquiry("/api/public/enquiries/general", {
    name,
    email: data.email,
    phone: data.phone,
    subject: data.subject || undefined,
    message: data.message || undefined,
  });
}

/** Enrol form → Course / Program enquiry. `stream` is the program name. */
export function submitCourseEnquiry(data: Record<string, string>): Promise<EnquiryResult> {
  const name = [data.firstName, data.lastName].filter(Boolean).join(" ").trim();
  return postEnquiry("/api/public/enquiries/course", {
    name,
    email: data.email,
    phone: data.phone,
    programName: data.stream,
    state: data.state || undefined,
    centreLocation: data.centre || undefined,
    remarks: compose([
      data.profile ? `Profile: ${data.profile}` : null,
      data.district ? `District: ${data.district}` : null,
      `Referred by someone: ${data.referred ? "Yes" : "No"}`,
    ]),
  });
}

/** Franchise form → Franchise enquiry. */
export function submitFranchiseEnquiry(data: Record<string, string>): Promise<EnquiryResult> {
  return postEnquiry("/api/public/enquiries/franchise", {
    name: data.fullName,
    email: data.email,
    phone: data.phone,
    gender: data.gender || undefined,
    age: digits(data.age),
    placeOfResidence: data.residence || undefined,
    education: data.education || undefined,
    profession: data.profession || undefined,
    franchiseLocation: data.franchiseLocation || undefined,
    retailSpace: data.rentalSpace || undefined,
    investmentRange: data.investment || undefined,
    trainingExperience: data.trainingExperience || undefined,
    remarks: data.message || undefined,
  });
}
