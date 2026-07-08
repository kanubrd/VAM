require('dotenv').config({ path: '.env.local' });
const nodemailer = require('nodemailer');

console.log('\n🔍 Testing SMTP Configuration...\n');
console.log('═══════════════════════════════════════════════════════');
console.log('SMTP_HOST:', process.env.SMTP_HOST);
console.log('SMTP_PORT:', process.env.SMTP_PORT);
console.log('SMTP_USER:', process.env.SMTP_USER);
console.log('SMTP_PASS:', process.env.SMTP_PASS ? `${process.env.SMTP_PASS.substring(0, 4)}...` : '❌ NOT SET');
console.log('COMPANY_EMAIL:', process.env.COMPANY_EMAIL || '❌ NOT SET');
console.log('═══════════════════════════════════════════════════════\n');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  debug: true,
  logger: true,
});

console.log('Step 1: Verifying SMTP connection...\n');

transporter.verify((error, success) => {
  if (error) {
    console.error('\n❌ SMTP Connection Failed!\n');
    console.error('Error:', error.message);
    console.error('\n📋 Possible Solutions:');
    console.error('1. Check if 2-Step Verification is enabled on Google Account');
    console.error('2. Generate a new App Password');
    console.error('3. Verify the password in .env.local is correct');
    console.error('4. Try port 465 with secure: true');
    console.error('\nSee EMAIL_TROUBLESHOOTING.md for detailed help.\n');
    process.exit(1);
  } else {
    console.log('\n✅ SMTP Connection Successful!\n');
    console.log('Step 2: Sending test email...\n');
    
    // Send test email
    transporter.sendMail({
      from: `"Valtrix Test" <${process.env.SMTP_USER}>`,
      to: process.env.COMPANY_EMAIL || 'info@valtrixmaterials.com',
      subject: '[Test] SMTP Configuration Test - Valtrix',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            .success { background: #d4edda; border: 1px solid #c3e6cb; padding: 20px; border-radius: 8px; }
            h1 { color: #155724; }
            .info { background: #f8f9fa; padding: 15px; border-radius: 4px; margin-top: 15px; }
          </style>
        </head>
        <body>
          <div class="success">
            <h1>✅ SMTP Test Successful!</h1>
            <p>If you're reading this, your SMTP configuration is working correctly!</p>
          </div>
          
          <div class="info">
            <h3>Configuration Details:</h3>
            <ul>
              <li><strong>SMTP Host:</strong> ${process.env.SMTP_HOST}</li>
              <li><strong>SMTP Port:</strong> ${process.env.SMTP_PORT}</li>
              <li><strong>From:</strong> ${process.env.SMTP_USER}</li>
              <li><strong>To:</strong> ${process.env.COMPANY_EMAIL || 'info@valtrixmaterials.com'}</li>
              <li><strong>Time:</strong> ${new Date().toLocaleString()}</li>
            </ul>
          </div>
          
          <p style="margin-top: 20px; color: #666;">
            <strong>Next Steps:</strong><br>
            1. Check your inbox for this email<br>
            2. If not in inbox, check spam/junk folder<br>
            3. Test the contact and quote forms on your website<br>
            4. Verify the new email format looks correct
          </p>
        </body>
        </html>
      `,
    }, (err, info) => {
      if (err) {
        console.error('\n❌ Email Send Failed!\n');
        console.error('Error:', err.message);
        console.error('\n📋 Possible Issues:');
        console.error('1. Gmail may have blocked the sign-in attempt');
        console.error('2. Daily/hourly sending limit reached');
        console.error('3. Account may be locked');
        console.error('\nCheck your Gmail account for security alerts.\n');
        process.exit(1);
      } else {
        console.log('\n✅ Test Email Sent Successfully!\n');
        console.log('═══════════════════════════════════════════════════════');
        console.log('Message ID:', info.messageId);
        console.log('Response:', info.response);
        console.log('═══════════════════════════════════════════════════════\n');
        console.log('📧 Check your inbox at:', process.env.COMPANY_EMAIL || 'info@valtrixmaterials.com');
        console.log('📁 If not in inbox, check spam/junk folder');
        console.log('\n✅ SMTP is configured correctly!\n');
        console.log('You can now test the forms on your website.');
        console.log('Visit: http://localhost:3000/contact\n');
      }
    });
  }
});
