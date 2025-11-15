import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import EmailTemplate from "@/components/EmailTemplate";

type ContactResponse =
  | { success: true }
  | { success: false; error: string };

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactResponse>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_RECEIVER_EMAIL) {
    return res.status(500).json({
      success: false,
      error: "Missing RESEND_API_KEY or CONTACT_RECEIVER_EMAIL.",
    });
  }

  const { name, email, subject, message } = req.body ?? {};

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      error: "Missing required fields.",
    });
  }

  try {
    const { error } = await resend.emails.send({
      from: "Aegion Mountain <onboarding@resend.dev>",
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: `[Contact] ${subject}`,
      reply_to: email,
      react: EmailTemplate({ name, email, subject, message }),
    });

    if (error) {
      throw new Error(error.message);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Contact form error", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unable to send message. Please try again later.";
    return res.status(500).json({
      success: false,
      error: errorMessage,
    });
  }
}
