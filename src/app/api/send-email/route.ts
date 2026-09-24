import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      company,
      email,
      phone,
      materialType,
      thickness,
      width,
      coilWeight,
      quantity,
      processingRequirement,
      deliveryLocation,
      message,
      // Legacy field kept for the general Contact form, which sends a subject line here
      productType,
    } = body;

    const requirementLabel = processingRequirement || productType || "General Inquiry";

    const emailContent = `
      New Inquiry from Alco Steel Website:

      Processing Requirement: ${requirementLabel}
      Material Type: ${materialType || "N/A"}
      Thickness: ${thickness || "N/A"}
      Width: ${width || "N/A"}
      Coil Weight: ${coilWeight || "N/A"}
      Quantity: ${quantity || "N/A"}
      Delivery Location: ${deliveryLocation || "N/A"}

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
          <h1 style="margin: 0; font-size: 24px;">New Processing Inquiry</h1>
          <p style="margin: 8px 0 0 0; opacity: 0.8;">Alco Steel Processors LLP</p>
        </div>
        <div style="padding: 24px; color: #1e293b;">
          <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid #f1f5f9;">
            <h2 style="font-size: 18px; margin-bottom: 12px; color: #0f172a;">Processing Requirement</h2>
            <p><strong>Requirement:</strong> ${requirementLabel}</p>
            <p><strong>Material Type:</strong> ${materialType || "N/A"}</p>
            <p><strong>Thickness:</strong> ${thickness || "N/A"}</p>
            <p><strong>Width:</strong> ${width || "N/A"}</p>
            <p><strong>Coil Weight:</strong> ${coilWeight || "N/A"}</p>
            <p><strong>Quantity:</strong> ${quantity || "N/A"}</p>
            <p><strong>Delivery Location:</strong> ${deliveryLocation || "N/A"}</p>
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
          This inquiry was sent via the Alco Steel website.
        </div>
      </div>
    `;

    await sendEmail({
      to: "marketingalcosteel@gmail.com",
      subject: `New Processing Inquiry: ${requirementLabel} from ${company}`,
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
