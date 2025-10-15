// /app/api/download-guide/route.ts

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, guideTitle } = await req.json();

    // Configure Gmail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // example: info@yourdomain.com
        pass: process.env.GMAIL_PASS,
      },
    });

    // Email content
    await transporter.sendMail({
      from: `"Career Guide Download" <${process.env.GMAIL_USER}>`,
      to: "info@yourdomain.com", // 📩 your destination email
      subject: `New Career Guide Download Request`,
      html: `
        <h3>New Guide Download Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Guide:</strong> ${guideTitle}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Download email error:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
