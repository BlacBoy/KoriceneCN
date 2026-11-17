import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: pretend success so bots move on
  if (body.website) return NextResponse.json({ ok: true });

  const { name, handle, email, followers } = body;
  if (!name || !handle || !email || !followers || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "Please fill in every required field with a valid email." }, { status: 400 });
  }

  // TODO: deliver the application. Easiest options:
  //  1) Resend (npm i resend) -> email CONTACT_TO_EMAIL
  //  2) Google Sheets / Airtable webhook
  //  3) Supabase table insert
  console.log("New Koricene application:", body);

  return NextResponse.json({ ok: true });
}
