import { NextResponse } from "next/server";

interface InquiryPayload {
  name: string;
  company: string;
  country: string;
  email: string;
  phone?: string;
  quantity: string;
  innerDiameter?: string;
  wallThickness?: string;
  length?: string;
  industry?: string;
  message?: string;
}

export async function POST(request: Request) {
  let body: InquiryPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 },
    );
  }

  // Validate required fields
  const required: (keyof InquiryPayload)[] = [
    "name",
    "company",
    "country",
    "email",
    "quantity",
  ];
  for (const field of required) {
    if (!body[field]?.trim()) {
      return NextResponse.json(
        { error: `${field} is required` },
        { status: 400 },
      );
    }
  }

  // Build email body
  const specs = [body.innerDiameter, body.wallThickness, body.length]
    .filter(Boolean)
    .join(" × ");

  const emailHtml = `
    <h2>New Inquiry from ${body.name}</h2>
    <table style="border-collapse:collapse;width:100%">
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #ddd">${body.name}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Company</td><td style="padding:8px;border:1px solid #ddd">${body.company}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Country</td><td style="padding:8px;border:1px solid #ddd">${body.country}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${body.email}</td></tr>
      ${body.phone ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Phone/WhatsApp</td><td style="padding:8px;border:1px solid #ddd">${body.phone}</td></tr>` : ""}
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Quantity</td><td style="padding:8px;border:1px solid #ddd">${body.quantity}</td></tr>
      ${specs ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Core Specs</td><td style="padding:8px;border:1px solid #ddd">${specs}</td></tr>` : ""}
      ${body.industry ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Industry</td><td style="padding:8px;border:1px solid #ddd">${body.industry}</td></tr>` : ""}
      ${body.message ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Message</td><td style="padding:8px;border:1px solid #ddd">${body.message}</td></tr>` : ""}
    </table>
  `;

  // Send via Resend if configured
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO ?? "info@kingcore.pk";
  const from = process.env.CONTACT_EMAIL_FROM ?? "onboarding@resend.dev";

  if (apiKey) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);

      await resend.emails.send({
        from,
        to,
        replyTo: body.email,
        subject: `Inquiry from ${body.name} — ${body.company} (${body.country})`,
        html: emailHtml,
      });
    } catch (err) {
      console.error("Resend error:", err);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 },
      );
    }
  } else {
    // Dev mode — log the inquiry
    console.log("📧 Inquiry received (RESEND_API_KEY not set):", body);
  }

  return NextResponse.json({ success: true });
}
