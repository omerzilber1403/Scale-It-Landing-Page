import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, budget } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log submission
    console.log('New contact form submission:', {
      name,
      company,
      email,
      phone,
      budget,
      timestamp: new Date().toISOString(),
    });

    // Send email using Resend
    try {
      await resend.emails.send({
        from: 'Scale It Contact <onboarding@resend.dev>', // Use your verified domain later
        to: 'benlenderman2@gmail.com',
        subject: `🚀 New Contact Form: ${name}${company ? ` from ${company}` : ''}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #66ddff 0%, #bb66ff 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 8px 8px; }
                .field { margin-bottom: 15px; }
                .label { font-weight: bold; color: #555; }
                .value { color: #000; }
                .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #888; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1 style="margin: 0;">📩 New Contact Form Submission</h1>
                </div>
                <div class="content">
                  <div class="field">
                    <span class="label">👤 Name:</span>
                    <span class="value">${name}</span>
                  </div>
                  ${company ? `
                  <div class="field">
                    <span class="label">🏢 Company:</span>
                    <span class="value">${company}</span>
                  </div>
                  ` : ''}
                  <div class="field">
                    <span class="label">📧 Email:</span>
                    <span class="value"><a href="mailto:${email}">${email}</a></span>
                  </div>
                  <div class="field">
                    <span class="label">📱 Phone:</span>
                    <span class="value"><a href="tel:${phone}">${phone}</a></span>
                  </div>
                  <div class="field">
                    <span class="label">💰 Budget:</span>
                    <span class="value">${budget}</span>
                  </div>
                  <div class="field">
                    <span class="label">🕐 Submitted:</span>
                    <span class="value">${new Date().toLocaleString('he-IL')}</span>
                  </div>
                </div>
                <div class="footer">
                  <p>This message was sent from Scale It contact form</p>
                </div>
              </div>
            </body>
          </html>
        `,
      });
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      // Still return success to user even if email fails (you'll see it in logs)
    }

    return NextResponse.json(
      { 
        success: true,
        message: 'Message sent successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}

