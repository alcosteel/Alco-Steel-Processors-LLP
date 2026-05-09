import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { productType, quantity, name, company, email, phone, message } = body;

    const emailContent = `
      New Inquiry from Alco Steel Website:
      
      Product Type: ${productType}
      Quantity: ${quantity}
      
      Contact Details:
      Name: ${name}
      Company: ${company}
      Email: ${email}
      Phone: ${phone}
      
      Message:
      ${message}
    `;

    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #0f172a; color: white; padding: 24px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">New Business Inquiry</h1>
          <p style="margin: 8px 0 0 0; opacity: 0.8;">Alco Steel Processors LLP</p>
        </div>
        <div style="padding: 24px; color: #1e293b;">
          <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid #f1f5f9;">
            <h2 style="font-size: 18px; margin-bottom: 12px; color: #0f172a;">Project Information</h2>
            <p><strong>Product Type:</strong> ${productType}</p>
            <p><strong>Quantity:</strong> ${quantity}</p>
          </div>
          
          <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid #f1f5f9;">
            <h2 style="font-size: 18px; margin-bottom: 12px; color: #0f172a;">Contact Details</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
          </div>
          
          <div>
            <h2 style="font-size: 18px; margin-bottom: 12px; color: #0f172a;">Message / Specifications</h2>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message || "No specific requirements provided."}</p>
          </div>
        </div>
        <div style="background-color: #f8fafc; padding: 16px; text-align: center; font-size: 12px; color: #64748b;">
          This inquiry was sent via the Alco Steel website contact form.
        </div>
      </div>
    `;

    await sendEmail({
      to: "marketingalcosteel@gmail.com",
      subject: `New Inquiry: ${productType} from ${company}`,
      text: emailContent,
      html: htmlContent,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
