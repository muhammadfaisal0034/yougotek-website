"use server";

import { Resend } from "resend";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").toLowerCase(),
  company: z.string().trim().min(2, "Company name is required").max(100),
  message: z.string().trim().min(20, "Please provide at least 20 characters about your project").max(2000),
  _confirm_email_field: z.string().max(0).optional(), // Obscured honeypot
});

export async function sendContactEmail(formData: FormData) {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured in environment variables.");
    return { error: "Email service is currently misconfigured. Please contact us directly at contact@yougotek.com" };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  console.log("Contact form submission received...");
  
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    message: formData.get("message"),
    _confirm_email_field: formData.get("_confirm_email_field"),
  });

  if (!validatedFields.success) {
    console.error("Validation failed:", validatedFields.error.flatten().fieldErrors);
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  // Honeypot check
  if (validatedFields.data._confirm_email_field) {
    console.warn("Honeypot triggered - suspected bot submission.");
    return { success: true };
  }

  const { name, email, company, message } = validatedFields.data;
  const recipient = process.env.CONTACT_EMAIL || "contact@yougotek.com";
  const sender = process.env.FROM_EMAIL || "onboarding@resend.dev";

  try {
    console.log(`Attempting to send email to ${recipient}...`);
    
    // Add a timeout to the Resend call
    const emailPromise = resend.emails.send({
      from: `You Go Tech <${sender}>`,
      to: [recipient],
      subject: `New Project Inquiry: ${name} ${company ? `from ${company}` : ""}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="color: #0f172a; margin-bottom: 24px;">New Project Inquiry</h2>
          
          <div style="margin-bottom: 16px;">
            <strong style="color: #64748b;">From:</strong>
            <p style="color: #0f172a; margin-top: 4px;">${name} (${email})</p>
          </div>
          
          ${company ? `
          <div style="margin-bottom: 16px;">
            <strong style="color: #64748b;">Company:</strong>
            <p style="color: #0f172a; margin-top: 4px;">${company}</p>
          </div>
          ` : ""}
          
          <div style="margin-bottom: 16px;">
            <strong style="color: #64748b;">Message:</strong>
            <p style="color: #0f172a; margin-top: 4px; line-height: 1.6;">${message}</p>
          </div>
          
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
          
          <p style="font-size: 12px; color: #94a3b8; text-align: center;">
            Sent via You Go Tech Lead Notification Engine
          </p>
        </div>
      `,
    });

    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error("Email service timed out")), 10000)
    );

    const data = await Promise.race([emailPromise, timeoutPromise]);
    console.log("Email sent successfully!");

    return { success: true, data };
  } catch (error) {
    console.error("Email Error:", error);
    return { error: error instanceof Error ? error.message : "Failed to send message. Please try again later." };
  }
}
