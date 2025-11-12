import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const requiredEnvVars = ["HOSTINGER_EMAIL", "HOSTINGER_EMAIL_PASSWORD"] as const;

type ContactResponse =
  | { success: true }
  | { success: false; error: string };

function missingEnvVar(): string | null {
  for (const key of requiredEnvVars) {
    if (!process.env[key]) return key;
  }
  return null;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactResponse>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const envMissing = missingEnvVar();
  if (envMissing) {
    return res
      .status(500)
      .json({ success: false, error: `Missing environment variable: ${envMissing}` });
  }

  const { name, email, organization, topic, message, recaptchaToken } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: "Missing required fields.",
    });
  }

  try {
    if (recaptchaToken) {
      if (!process.env.RECAPTCHA_SECRET_KEY) {
        return res.status(500).json({
          success: false,
          error: "Missing reCAPTCHA secret on the server.",
        });
      }

      const verification = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: recaptchaToken,
        }).toString(),
      });

      const verificationResult = (await verification.json()) as { success: boolean };
      if (!verificationResult.success) {
        return res.status(400).json({
          success: false,
          error: "reCAPTCHA validation failed.",
        });
      }
    }

    const transporter = nodemailer.createTransport({
      host: process.env.HOSTINGER_SMTP_HOST || "smtp.hostinger.com",
      port: Number(process.env.HOSTINGER_SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.HOSTINGER_EMAIL,
        pass: process.env.HOSTINGER_EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Aegion Mountain Site" <${process.env.HOSTINGER_EMAIL}>`,
      to: process.env.CONTACT_RECIPIENT || process.env.HOSTINGER_EMAIL,
      replyTo: `${name} <${email}>`,
      subject: `New inquiry${topic ? `: ${topic}` : ""}`,
      text: `
Name: ${name}
Email: ${email}
Organization: ${organization || "N/A"}
Focus Area: ${topic || "N/A"}

Message:
${message}
      `.trim(),
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Contact form error", error);
    return res.status(500).json({
      success: false,
      error: "Unable to send message. Please try again later.",
    });
  }
}
