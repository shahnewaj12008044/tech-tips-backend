import nodemailer from 'nodemailer';
import config from '../config';

export const sendEmail = async (to: string, resetLink: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: config.node_env === 'production',
    auth: {
      user: config.email_user,
      pass: config.email_pass,
    },
  });

  const html = `
  <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 40px auto; padding: 25px; border: 1px solid #e0e0e0; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
    <div style="text-align: center; margin-bottom: 40px;">
      <h1 style="color: #222; font-size: 24px;">Password Reset Assistance</h1>
      <p style="color: #444; font-size: 16px; margin: 0;">Need help resetting your password?</p>
    </div>
    <div style="padding: 20px; background-color: #f2f2f2; border-radius: 8px;">
      <p style="color: #222; font-size: 16px;">Hello,</p>
      <p style="color: #555; font-size: 15px; line-height: 1.6;">
        We received a request to reset your password. Please click the button below to proceed:
      </p>
      <div style="text-align: center; margin: 35px 0;">
        <a href="${resetLink}" style="background-color: #F75C03; color: white; padding: 12px 24px; border-radius: 5px; text-decoration: none; font-size: 16px; font-weight: bold; box-shadow: 0 2px 8px rgba(247, 92, 3, 0.3);">
          Reset Password
        </a>
      </div>
      <p style="color: #555; font-size: 15px; line-height: 1.6;">
        If you didn't request a password reset, please ignore this message.
      </p>
      <p style="color: #555; font-size: 15px; line-height: 1.6;">
        For security reasons, this link will expire in 10 minutes.
      </p>
    </div>
    <div style="margin-top: 40px; text-align: center; color: #888;">
      <p style="font-size: 14px;">&copy; ${new Date().getFullYear()} tech-tips-hub. All rights reserved.</p>
    </div>
  </div>
`;


  await transporter.sendMail({
    from: `"Tech-tips-hub" <${config.email_user}>`, // sender address
    to, // list of receivers
    subject: 'Reset your password within ten mins', // Subject line
    text: '', // plain text body
    html, // html body
  });
};
