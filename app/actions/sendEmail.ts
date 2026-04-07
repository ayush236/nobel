'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface EmailState {
  success: boolean
  message: string
}

export async function sendContactEmail(
  _prevState: EmailState,
  formData: FormData
): Promise<EmailState> {
  const name    = formData.get('name')    as string
  const email   = formData.get('email')   as string
  const phone   = formData.get('phone')   as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return { success: false, message: 'Please fill in all required fields.' }
  }

  // Check if environment variables are set
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set')
    return { success: false, message: 'Email service not configured.' }
  }

  if (!process.env.ADMIN_EMAIL) {
    console.error('ADMIN_EMAIL is not set')
    return { success: false, message: 'Admin email not configured.' }
  }

  const submittedAt = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
  })

  const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev'
  const adminEmail = process.env.ADMIN_EMAIL

  console.log('Attempting to send email...')
  console.log('From:', fromEmail)
  console.log('To:', adminEmail)
  console.log('Reply-To:', email)

  try {
    const result = await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      replyTo: email,
      subject: `Nobel Environment Academy - New Message from ${name}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #f0f4f8; padding: 32px 16px; }
    .wrapper { max-width: 580px; margin: 0 auto; }
    .card { background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,.10); }
    .header { background: linear-gradient(135deg, #15803d 0%, #166534 100%); padding: 32px 36px; }
    .header-badge { display: inline-block; background: rgba(255,255,255,.15); color: #fff; font-size: 11px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; padding: 4px 12px; border-radius: 20px; margin-bottom: 12px; }
    .header h1 { color: #fff; font-size: 22px; font-weight: 700; line-height: 1.3; }
    .header-time { color: #bbf7d0; font-size: 12px; margin-top: 6px; }
    .body { padding: 32px 36px; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px; }
    .field { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 16px; }
    .field.full { grid-column: 1/-1; }
    .label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; color: #94a3b8; margin-bottom: 5px; }
    .value { font-size: 14px; color: #1e293b; font-weight: 500; word-break: break-word; }
    .value a { color: #15803d; text-decoration: none; }
    .subject-badge { display: inline-block; background: #dcfce7; color: #15803d; font-size: 12px; font-weight: 600; padding: 3px 10px; border-radius: 20px; }
    .msg-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 20px; margin-bottom: 28px; }
    .msg-box .label { margin-bottom: 10px; }
    .msg-text { font-size: 14px; color: #334155; line-height: 1.7; white-space: pre-wrap; }
    .footer { padding: 20px 36px; text-align: center; border-top: 1px solid #f1f5f9; }
    .footer-logo { font-size: 13px; font-weight: 700; color: #15803d; margin-bottom: 4px; }
    .footer-addr { font-size: 11px; color: #94a3b8; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="card">
      <div class="header">
        <div class="header-badge">📧 NEW MESSAGE</div>
        <h1>Nobel Environment Academy</h1>
        <div class="header-time">Received on ${submittedAt}</div>
      </div>
      <div class="body">
        <div class="grid">
          <div class="field">
            <div class="label">Full Name</div>
            <div class="value">${name}</div>
          </div>
          <div class="field">
            <div class="label">Phone</div>
            <div class="value">${phone || '—'}</div>
          </div>
          <div class="field">
            <div class="label">Email Address</div>
            <div class="value"><a href="mailto:${email}">${email}</a></div>
          </div>
          <div class="field">
            <div class="label">Subject</div>
            <div class="value"><span class="subject-badge">${subject || 'General Inquiry'}</span></div>
          </div>
        </div>
        <div class="msg-box">
          <div class="label">MESSAGE</div>
          <div class="msg-text">${message}</div>
        </div>
      </div>
      <div class="footer">
        <div class="footer-logo">Nobel Environment Academy</div>
        <div class="footer-addr">Tilottama-15, Kotihawa, Rupandehi, Nepal</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    })

    console.log('Email sent successfully!', result)
    return { success: true, message: 'Your message has been sent successfully!' }
  } catch (error) {
    console.error('Email sending error:', error)
    
    // More detailed error message
    if (error instanceof Error) {
      console.error('Error message:', error.message)
      return { success: false, message: `Failed to send: ${error.message}` }
    }
    
    return { success: false, message: 'Failed to send message. Please try again.' }
  }
}
