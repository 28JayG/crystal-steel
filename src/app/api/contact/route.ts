import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, company, phone, interest, message } = body;

    // Input validation
    if (!fullName?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        {
          error:
            'Please fill in all required fields (Name, Email, and Message).',
        },
        { status: 400 },
      );
    }

    const smtpHost = process.env.SMTP_HOST || 'smtp.office365.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
    const smtpSecure = process.env.SMTP_SECURE === 'true';
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const recipientEmail = (
      process.env.CONTACT_EMAIL_TO || 'crystalmetalindustry.2026@outlook.com'
    ).trim();

    // Validate SMTP credentials
    if (!smtpPass) {
      console.error(
        '❌ SMTP_PASS is missing in environment variables (.env.local).',
      );
      return NextResponse.json(
        { error: 'Failed to send message try again later.' },
        { status: 500 },
      );
    }

    console.log(
      `📧 [DISPATCHING EMAIL] From: "${fullName}" <${smtpUser}> -> TO: ${recipientEmail}`,
    );

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      requireTLS: true,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Email template formatting
    const mailOptions = {
      from: `"${fullName.replace(/"/g, '')}" <${smtpUser}>`,
      replyTo: email,
      to: recipientEmail,
      subject: `[Contact Form] ${interest || 'General Inquiry'} - ${fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; background-color: #f4f6f9; color: #1e293b; margin: 0; padding: 20px; }
              .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
              .header { background-color: #0b0f19; color: #ffffff; padding: 24px; text-align: left; border-bottom: 3px solid #f59e0b; }
              .header h2 { margin: 0; font-size: 20px; color: #ffffff; }
              .header p { margin: 4px 0 0 0; color: #94a3b8; font-size: 13px; }
              .content { padding: 24px; }
              .message-box { margin-top: 20px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; padding: 16px; }
              .message-title { font-weight: bold; color: #334155; margin-bottom: 8px; font-size: 13px; text-transform: uppercase; tracking: 0.05em; }
              .message-text { white-space: pre-wrap; font-size: 14px; color: #1e293b; margin: 0; line-height: 1.5; }
              .footer { background: #f1f5f9; padding: 16px 24px; font-size: 12px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0; }
            </style>
          </head>
          <body>
            <div class="card">
              <div class="header">
                <h2>New Contact Us Inquiry</h2>
                <p>Submitted via Crystal Metal Industry Web Portal</p>
              </div>
              <div class="content">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 0; font-weight: bold; color: #475569; width: 130px;">Full Name:</td>
                    <td style="padding: 10px 0; color: #0f172a;">${fullName}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 0; font-weight: bold; color: #475569;">Email Address:</td>
                    <td style="padding: 10px 0; color: #0f172a;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 0; font-weight: bold; color: #475569;">Company:</td>
                    <td style="padding: 10px 0; color: #0f172a;">${company || 'Not specified'}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 0; font-weight: bold; color: #475569;">Phone Number:</td>
                    <td style="padding: 10px 0; color: #0f172a;">${phone || 'Not specified'}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 0; font-weight: bold; color: #475569;">Product Interest:</td>
                    <td style="padding: 10px 0; color: #d97706; font-weight: bold;">${interest || 'Other'}</td>
                  </tr>
                </table>

                <div class="message-box">
                  <div class="message-title">Project Specifications / Requirements</div>
                  <p class="message-text">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
                </div>
              </div>
              <div class="footer">
                This is an automated notification from Crystal Metal Industry contact route handler.
              </div>
            </div>
          </body>
        </html>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(
      `✅ Email dispatched successfully! Message ID: ${info.messageId}`,
    );

    return NextResponse.json({ success: true, message: 'Mail sent' });
  } catch (error: unknown) {
    console.error(
      '❌ Error sending email via Nodemailer route handler:',
      error,
    );
    return NextResponse.json(
      { error: 'Failed to send message try again later.' },
      { status: 500 },
    );
  }
}
