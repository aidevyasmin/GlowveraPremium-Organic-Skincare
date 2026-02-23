import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message, type = 'Contact Form' } = await req.json();

    console.log(`DEBUG: Received ${type} from ${name} (${email})`);

    const gmailUser = process.env.GMAIL_USER || 'ynisar514@gmail.com';
    const gmailPass = process.env.GMAIL_APP_PASSWORD;

    if (!gmailPass) {
      console.error('ERROR: GMAIL_APP_PASSWORD is not defined in environment variables.');
      return NextResponse.json(
        { success: false, message: 'Server configuration error: Email credentials missing.' },
        { status: 500 }
      );
    }

    // Configure Nodemailer with Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass, 
      },
    });

    // Verify transporter connection
    try {
      await transporter.verify();
      console.log('DEBUG: SMTP connection verified successfully.');
    } catch (verifyError) {
      console.error('ERROR: SMTP verification failed:', verifyError);
      return NextResponse.json(
        { success: false, message: 'Failed to connect to email server.' },
        { status: 500 }
      );
    }

    // 1. Email to the Business Owner
    const ownerMailOptions = {
      from: email,
      to: 'ynisar514@gmail.com',
      subject: `New ${type} Submission from ${name}`,
      text: `
        New submission received!
        
        Type: ${type}
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #059669;">New ${type} Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f3f4f6; padding: 15px; border-radius: 8px;">
            ${message}
          </div>
        </div>
      `,
    };

    // 2. Auto-reply to the Customer
    const customerMailOptions = {
      from: 'Glowvera <ynisar514@gmail.com>',
      to: email,
      subject: 'Thank you for contacting Glowvera!',
      text: `Hi ${name},

Thank you for reaching out to Glowvera. We have received your message and will get back to you as soon as possible.

Stay glowing,
The Glowvera Team`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #059669;">Thank you for reaching out!</h2>
          <p>Hi <strong>${name}</strong>,</p>
          <p>We've received your message and our team will get back to you shortly.</p>
          <p>In the meantime, feel free to explore our latest skincare collections.</p>
          <br>
          <p>Stay glowing,<br><strong>The Glowvera Team</strong></p>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(customerMailOptions);

    return NextResponse.json({ success: true, message: 'Emails sent successfully' });
  } catch (error: any) {
    console.error('CRITICAL ERROR in Email API:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send emails', 
        error: error.message || 'Unknown error' 
      },
      { status: 500 }
    );
  }
}
