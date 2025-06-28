import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,      // Your email address
    pass: process.env.EMAIL_PASSWORD,  // Your app password (not your Gmail password)
  },
});

export const sendOtpEmail = async (to: string, otp: string) => {
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 500px; margin: auto; border: 1px solid #eaeaea; border-radius: 10px;">
      <h2 style="color: #1da1f2;">Your OTP Code</h2>
      <p>Use the following One-Time Password (OTP) to proceed:</p>
      <div style="font-size: 24px; font-weight: bold; margin: 20px 0; color: #000;">${otp}</div>
      <p>This code is valid for 5 minutes. Please do not share it with anyone.</p>
      <hr />
      <small style="color: #888;">If you didn't request this, you can safely ignore this email.</small>
    </div>
  `;

  await transporter.sendMail({
    from: `"LookMyBarber" <${process.env.EMAIL_USER}>`,
    to,
    subject: 'Your OTP Code',
    html: htmlContent,
  });
};




// export const sendOtpEmail = async (to: string, otp: string) => {
//   await transporter.sendMail({
//     from: process.env.EMAIL_USER,
//     to,
//     subject: 'Your OTP Code',
//     text: `Your OTP is: ${otp}`,
//   });
// };

