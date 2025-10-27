import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend('re_TwZQau62_25yUm5SVSknMUEndNZk63Mxc');

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, service, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !service || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create HTML content for the email
    const htmlContent = `
      <h2 style="color: #2563eb; font-size: 24px; margin-bottom: 20px;">Nueva Solicitud de Contacto</h2>
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb;">
        <p style="margin: 10px 0;"><strong style="color: #374151;">Nombre:</strong> ${name}</p>
        <p style="margin: 10px 0;"><strong style="color: #374151;">Email:</strong> ${email}</p>
        <p style="margin: 10px 0;"><strong style="color: #374151;">Teléfono:</strong> ${phone}</p>
        <p style="margin: 10px 0;"><strong style="color: #374151;">Servicio de Interés:</strong> ${service}</p>
        <p style="margin: 10px 0;"><strong style="color: #374151;">Mensaje:</strong></p>
        <p style="margin: 10px 0; padding-left: 20px; color: #6b7280;">${message}</p>
      </div>
      <p style="margin-top: 20px; color: #6b7280; font-size: 14px;">Este es un mensaje automático del sistema de contacto de IonosHub.</p>
    `;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'info@ionoshub.net',
      replyTo: email,
      subject: `Nueva Solicitud de Contacto - ${service}`,
      html: htmlContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Handler error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

