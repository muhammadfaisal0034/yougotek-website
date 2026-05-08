"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function sendContactEmail(formData: FormData) {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { name, email, company, message } = validatedFields.data;

  try {
    const data = await resend.emails.send({
      from: "You Go Tech <onboarding@resend.dev>",
      to: ["contact@yougotek.com"],
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

    return { success: true, data };
  } catch (error) {
    console.error("Email Error:", error);
    return { error: "Failed to send message. Please try again later." };
  }
}
