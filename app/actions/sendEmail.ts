'use server'

import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.BREVO_SMTP_HOST,
  port: Number(process.env.BREVO_SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.BREVO_SMTP_USER,
    pass: process.env.BREVO_SMTP_PASS,
  },
})

const ADMIN_EMAIL = process.env.ADMIN_EMAIL!
// Brevo SMTP login is the only auto-verified sender
const SENDER = `Nobel Environment Academy Website form <navatechmedia9@gmail.com>`

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

  const submittedAt = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
  })

  try {
    // 1. Notify admin — replyTo is user's email so admin can reply directly
    await transporter.sendMail({
      from: SENDER,
      to: ADMIN_EMAIL,
      replyTo: `${name} <${email}>`,
      subject: `📩 New Message: ${subject || 'General Inquiry'} from ${name}`,
      html: `
<!DOCTYPE html><html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:'Segoe UI',Arial,sans-serif;background:#f0f4f8;padding:32px 16px}
  .wrapper{max-width:580px;margin:0 auto}
  .card{background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.10)}
  .header{background:linear-gradient(135deg,#15803d 0%,#166534 100%);padding:32px 36px;position:relative}
  .header-badge{display:inline-block;background:rgba(255,255,255,.15);color:#fff;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:4px 12px;border-radius:20px;margin-bottom:12px}
  .header h1{color:#fff;font-size:22px;font-weight:700;line-height:1.3}
  .header-time{color:#bbf7d0;font-size:12px;margin-top:6px}
  .body{padding:32px 36px}
  .grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px}
  .field{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:14px 16px}
  .field.full{grid-column:1/-1}
  .label{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#94a3b8;margin-bottom:5px}
  .value{font-size:14px;color:#1e293b;font-weight:500;word-break:break-word}
  .value a{color:#15803d;text-decoration:none}
  .subject-badge{display:inline-block;background:#dcfce7;color:#15803d;font-size:12px;font-weight:600;padding:3px 10px;border-radius:20px}
  .msg-box{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:20px;margin-bottom:28px}
  .msg-box .label{margin-bottom:10px}
  .msg-text{font-size:14px;color:#334155;line-height:1.7;white-space:pre-wrap}
  .btn{display:inline-block;padding:13px 28px;background:linear-gradient(135deg,#15803d,#166534);color:#fff;text-decoration:none;border-radius:10px;font-weight:700;font-size:14px;letter-spacing:.02em}
  .divider{border:none;border-top:1px solid #f1f5f9;margin:0 36px}
  .footer{padding:20px 36px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px}
  .footer-logo{font-size:13px;font-weight:700;color:#15803d}
  .footer-addr{font-size:11px;color:#94a3b8}
</style></head><body>
<div class="wrapper">
  <div class="card">
    <div class="header">
      <div class="header-badge">
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline;vertical-align:middle;margin-right:5px"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        New Message
      </div>
      <h1>Nobel Environment Academy from Contact Form Website</h1>
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
        <div class="label">Message</div>
        <div class="msg-text">${message}</div>
      </div>
    </div>
    <hr class="divider"/>
    <div class="footer">
      
      <div class="footer-addr"> Nobel Environment Academy Tilottama-15, Kotihawa, Rupandehi, Nepal</div>
    </div>
  </div>
</div>
</body></html>`,
    })

    // 2. Confirmation to user
    await transporter.sendMail({
      from: SENDER,
      to: `${name} <${email}>`,
      subject: 'We received your message — Nobel Environment Academy',
      html: `
<!DOCTYPE html><html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:'Segoe UI',Arial,sans-serif;background:#f0f4f8;padding:32px 16px}
  .wrapper{max-width:580px;margin:0 auto}
  .card{background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.10)}
  .header{background:linear-gradient(135deg,#15803d 0%,#166534 100%);padding:32px 36px;text-align:center}
  .checkmark{width:52px;height:52px;background:rgba(255,255,255,.2);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:24px;line-height:52px}
  .header h1{color:#fff;font-size:22px;font-weight:700}
  .header p{color:#bbf7d0;font-size:13px;margin-top:6px}
  .body{padding:32px 36px;color:#334155;line-height:1.7}
  .body p{margin-bottom:16px;font-size:14px}
  .msg-box{background:#f8fafc;border-left:4px solid #15803d;border-radius:0 10px 10px 0;padding:16px 20px;margin:20px 0;font-size:14px;white-space:pre-wrap;color:#475569}
  .info-row{display:flex;gap:10px;align-items:flex-start;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:14px 16px;margin-top:20px}
  .info-row .icon{font-size:18px;flex-shrink:0}
  .info-row .text{font-size:13px;color:#166534}
  .divider{border:none;border-top:1px solid #f1f5f9;margin:0 36px}
  .footer{padding:20px 36px;text-align:center}
  .footer-logo{font-size:13px;font-weight:700;color:#15803d;margin-bottom:4px}
  .footer-addr{font-size:11px;color:#94a3b8}
</style></head><body>
<div class="wrapper">
  <div class="card">
    <div class="header">
     
      <h1>Message Received!</h1>
      <p>Nobel Environment Academy</p>
    </div>
    <div class="body">
      <p>Dear <strong>${name}</strong>,</p>
      <p>Thank you for reaching out to us. We have received your message and our team will get back to you as soon as possible.</p>
      <div class="msg-box">${message}</div>
      <div class="info-row">
        <div class="icon">📞</div>
        <div class="text">For urgent queries, call us at <strong>071-514220 / 9857054560</strong><br/>Office hours: Sunday–Friday, 10:00 AM – 4:00 PM</div>
      </div>
      <p style="margin-top:24px">Warm regards,<br/><strong>Nobel Environment Academy</strong></p>
    </div>
    <hr class="divider"/>
    <div class="footer">
      <div class="footer-logo">Nobel Environment Academy</div>
      <div class="footer-addr">Tilottama-15, Kotihawa, Rupandehi, Nepal · navatechmedia9@gmail.com</div>
    </div>
  </div>
</div>
</body></html>`,
    })

    return { success: true, message: 'Your message has been sent successfully!' }
  } catch (error) {
    console.error('SMTP error:', error)
    return { success: false, message: 'Failed to send message. Please try again.' }
  }
}
