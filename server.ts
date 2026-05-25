import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

// Body parser parsing
app.use(express.json());

const SMTP_HOST = process.env.SMTP_HOST || 'smtp.spaceon.in';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '465', 10);
const SMTP_USER = process.env.SMTP_USER || '';
const SMTP_PASS = process.env.SMTP_PASS || '';
const ADMIN_EMAIL = process.env.SMTP_ADMIN_EMAIL || 'info@spaceon.in';

const smtpEnabled = Boolean(SMTP_USER && SMTP_PASS);
const transporter = smtpEnabled
  ? nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })
  : null;

if (transporter) {
  transporter.verify((error) => {
    if (error) {
      console.error('SMTP Connection pipeline verification failed:', error);
    } else {
      console.log('SMTP Delivery pipe successfully verified and active.');
    }
  });
} else {
  console.warn('SMTP email delivery is disabled because SMTP_USER or SMTP_PASS is not configured.');
}

// API routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', smtp: smtpEnabled ? 'active' : 'disabled' });
});

// Handle Project Enquiry Submission
app.post('/api/send-enquiry', async (req, res) => {
  const { name, email, company, phoneCode, phoneNumber, service, message } = req.body;

  if (!name || !email || !service || !message) {
    return res.status(400).json({ 
      success: false, 
      error: 'Missing required parameters. Name, email, service, and message are required.' 
    });
  }

  try {
    const formattedPhone = phoneNumber ? `${phoneCode} ${phoneNumber}` : 'Not provided';
    const submissionTime = new Date().toLocaleString('en-US', { timeZone: 'UTC' }) + ' UTC';

    // 1. Send inquiry notification email to ADMIN (info@spaceon.in)
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background-color: #f6f9fc; color: #1a202c; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
          .header { background-color: #0b0f19; padding: 24px; text-align: center; border-bottom: 3px solid #00df89; }
          .logo { height: 32px; width: auto; }
          .content { padding: 32px; }
          .headline { font-size: 20px; font-weight: 700; color: #0b0f19; margin-top: 0; margin-bottom: 20px; border-bottom: 2px solid #f0fdf4; padding-bottom: 12px; }
          .field-group { margin-bottom: 16px; border-bottom: 1px dashed #edf2f7; padding-bottom: 12px; }
          .field-label { font-size: 11px; font-weight: 700; text-transform: uppercase; color: #718096; letter-spacing: 0.1em; margin-bottom: 4px; }
          .field-value { font-size: 15px; color: #1a202c; font-weight: 500; }
          .field-value-msg { font-size: 14.5px; color: #2d3748; background-color: #f7fafc; padding: 14px; border-radius: 8px; border-left: 3px solid #00df89; line-height: 1.6; margin-top: 6px; }
          .footer { background-color: #f7fafc; padding: 16px 32px; text-align: center; font-size: 11px; color: #a0aec0; border-top: 1px solid #edf2f7; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <span style="font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: 0.05em;">SPACE<span style="color: #00df89;">ON</span></span>
            <div style="font-size: 10px; color: #8a99ad; font-family: monospace; letter-spacing: 0.25em; margin-top: 4px; text-transform: uppercase;">Enterprise Submission Routing</div>
          </div>
          <div class="content">
            <h2 class="headline">New Inbound Project Estimation Request</h2>
            
            <div class="field-group">
              <div class="field-label">Sender Name</div>
              <div class="field-value">${name}</div>
            </div>
            
            <div class="field-group">
              <div class="field-label">Direct Email</div>
              <div class="field-value"><a href="mailto:${email}" style="color: #00df89; text-decoration: none; font-weight: 600;">${email}</a></div>
            </div>
            
            <div class="field-group">
              <div class="field-label">Enterprise Company</div>
              <div class="field-value">${company || 'Not Specified'}</div>
            </div>
            
            <div class="field-group">
              <div class="field-label">Contact Phone</div>
              <div class="field-value">${formattedPhone}</div>
            </div>
            
            <div class="field-group">
              <div class="field-label">Estimated Service Node</div>
              <div class="field-value" style="color: #0d9488; font-weight: 700;">${service}</div>
            </div>

            <div class="field-group" style="border-bottom: none; padding-bottom: 0;">
              <div class="field-label">Inquiry Message</div>
              <div class="field-value-msg">${message.replace(/\n/g, '<br />')}</div>
            </div>
          </div>
          <div class="footer">
            Submitted from SpaceOn Web Enquiry Pipeline &bull; ${submissionTime}
          </div>
        </div>
      </body>
      </html>
    `;

    // 2. Send professional instant confirmation email to the USER
    const userEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background-color: #f6f9fc; color: #1a202c; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
          .header { background-color: #0b0f19; padding: 28px; text-align: center; border-bottom: 3px solid #00df89; }
          .content { padding: 32px; line-height: 1.6; }
          .headline { font-size: 20px; font-weight: 700; color: #0b0f19; margin-top: 0; margin-bottom: 16px; }
          .body-text { font-size: 14.5px; color: #4a5568; margin-bottom: 24px; }
          .params-card { background-color: #f7fafc; border: 1px solid #edf2f7; border-radius: 8px; padding: 20px; margin-bottom: 24px; }
          .param-row { display: flex; border-bottom: 1px solid #edf2f7; padding: 8px 0; font-size: 13.5px; }
          .param-row:last-child { border-bottom: none; }
          .param-label { width: 30%; font-weight: 700; color: #718096; text-transform: uppercase; font-size: 10px; letter-spacing: 0.05em; }
          .param-value { width: 70%; color: #2d3748; font-weight: 500; }
          .action-badge { display: inline-block; background-color: #f0fdf4; border: 1px solid #bbf7d0; color: #166534; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; padding: 4px 10px; border-radius: 4px; margin-bottom: 16px; }
          .footer { background-color: #0b0f19; padding: 24px; text-align: center; font-size: 12px; color: #8a99ad; }
          .footer-logo { font-size: 15px; font-weight: 800; color: #ffffff; letter-spacing: 0.05em; margin-bottom: 8px; }
          .footer-links { margin-top: 12px; font-size: 11px; color: #4a5568; }
          .footer-links a { color: #8a99ad; text-decoration: none; margin: 0 8px; }
          .footer-links a:hover { color: #ffffff; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <span style="font-size: 24px; font-weight: 800; color: #ffffff; letter-spacing: 0.05em;">SPACE<span style="color: #00df89;">ON</span></span>
            <div style="font-size: 9px; color: #718096; font-family: monospace; letter-spacing: 0.3em; margin-top: 4px; text-transform: uppercase;">Next-Gen Cloud & Software Engineering</div>
          </div>
          <div class="content">
            <div class="action-badge">ESTIMATION PIPELINE DEPLOYED</div>
            <h2 class="headline">Hi ${name},</h2>
            <p class="body-text">
              Thank you for reaching out to SpaceOn Technology. We have received your parameters regarding <strong>${service}</strong>.
            </p>
            <p class="body-text">
              A senior technical architect is already compiling your project's initial assessment. We understand consistency and efficiency are critical, so <strong>we guarantee a professional consultation response within 1 business day</strong>. 
            </p>
            
            <div class="params-card">
              <h3 style="margin-top: 0; margin-bottom: 12px; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: #718096;">Your Submitted parameters:</h3>
              <div class="param-row">
                <div class="param-label">Company</div>
                <div class="param-value">${company || 'Not specified'}</div>
              </div>
              <div class="param-row">
                <div class="param-label">Contact</div>
                <div class="param-value">${formattedPhone}</div>
              </div>
              <div class="param-row">
                <div class="param-label">Service</div>
                <div class="param-value" style="color: #00df89; font-weight: 700;">${service}</div>
              </div>
            </div>

            <p class="body-text" style="margin-bottom: 0;">
              In the meantime, you can explore our full technical stack or schedule code reviews at <a href="https://spaceon.in" style="color: #00df89; text-decoration: none; font-weight: 600;">spaceon.in</a>. Feel free to reply directly to this mail if you wish to attach any system specification documents (SRS) or NDA files.
            </p>
          </div>
          
          <div class="footer">
            <div class="footer-logo">SPACE<span style="color: #00df89;">ON</span> TECHNOLOGY</div>
            <div style="font-family: monospace; font-size: 10px;">GSTIN: 24IOGPP7106J1ZN &middot; ISO 9001:2015 CERTIFIED</div>
            <div class="footer-links">
              <a href="https://spaceon.in">Website</a> |
              <a href="mailto:info@spaceon.in">Contact Desk</a>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    if (!transporter) {
      return res.status(503).json({
        success: false,
        error: 'SMTP delivery is not configured. Please set SMTP_USER and SMTP_PASS in your environment variables.',
      });
    }

    // Dispatch Admin Notification Envelope
    const adminMailPromise = transporter.sendMail({
      from: `"SpaceOn Enquiry Gateway" <${SMTP_USER}>`,
      to: ADMIN_EMAIL,
      replyTo: email,
      subject: `[INBOUND ENQUIRY] ${name} - ${service}`,
      html: adminEmailHtml,
    });

    // Dispatch User Acknowledgement Envelope
    const userMailPromise = transporter.sendMail({
      from: `"SpaceOn Technology" <${SMTP_USER}>`,
      to: email,
      subject: `We received your inquiry - SpaceOn Technology`,
      html: userEmailHtml,
    });

    // Execute concurrently for maximal responsiveness
    await Promise.all([adminMailPromise, userMailPromise]);

    return res.status(200).json({ success: true, message: 'Enquiries processed and delivered successfully.' });

  } catch (error: any) {
    console.error('Error dispatching enterprise mail:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'SMTP pipeline failed to dispatch communications. Please try again later or contact us at info@spaceon.in' 
    });
  }
});

// Vite middleware flow for full stack development and production build serving
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server launched and active on port ${PORT}`);
  });
}

startServer();
