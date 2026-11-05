import { NextResponse } from "next/server";
import { verifyCertificate } from "@/lib/portal";

// Same-origin proxy to the ops portal's (non-CORS) verify endpoint.
// GET /api/verify/<code>
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code } = await params;
  const result = await verifyCertificate(code);
  return NextResponse.json(result, { status: result.valid ? 200 : 404 });
}
