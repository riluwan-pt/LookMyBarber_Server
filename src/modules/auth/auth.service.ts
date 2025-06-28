import { prisma } from '../../config/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
// import { OAuth2Client } from 'google-auth-library';
import {  sendOtpEmail, } from '../../utils/emailSender';
import { log } from 'console';

// const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const OTP_EXPIRATION_MINUTES = 5;



export const verifyEmailPasswordAndSendOtp = async (email: string, password: string) => {
    log('Verifying email and password for OTP in service file:', email, 'with password:', password);
    // Check if user exists and password is correct
  const user = await prisma.user.findUnique({ where: { email } });
    log('User found:', user);
  if (!user || !user.passwordHash || !(await bcrypt.compare(password, user.passwordHash))) {
    throw new Error('Invalid credentials');
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  await prisma.otp.create({
    data: {
      email,
      code: otp,
      context: 'login',
      expiresAt: new Date(Date.now() + OTP_EXPIRATION_MINUTES * 60000),
    },
  });

    // Send OTP via email
  await sendOtpEmail(email, otp);
  // For demonstration purposes, we log the OTP to the console
  console.log(`OTP for ${email}: ${otp}`);
};

export const verifyOtpAndGenerateToken = async (email: string, code: string) => {
  const otpRecord = await prisma.otp.findFirst({
    where: { email, code, expiresAt: { gte: new Date() } },
  });

  if (!otpRecord) throw new Error('Invalid or expired OTP');

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error('User not found');

  await prisma.otp.deleteMany({ where: { email } });

  return generateToken(user);
};

// export const googleLogin = async (token: string) => {
//   const ticket = await client.verifyIdToken({ idToken: token, audience: process.env.GOOGLE_CLIENT_ID });
//   const payload = ticket.getPayload();
//   if (!payload?.email) throw new Error('Google auth failed');

//   let user = await prisma.user.findUnique({ where: { email: payload.email } });
//   if (!user) {
//     user = await prisma.user.create({
//       data: {
//         email: payload.email,
//         name: payload.name,
//         provider: 'google',
//         providerId: payload.sub,
//         isVerified: true,
//       },
//     });
//   }

//   return generateToken(user);
// };


export const sendOtpForSignup = async (name: string, email: string, password: string) => {
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) throw new Error('User already exists');

  const passwordHash = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      name,
      email,            
        passwordHash,
        isVerified: false,  
    },
  });
    // Generate OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  await prisma.otp.create({
    data: {
      email,
      code: otp,
      context: 'signup',
      meta: passwordHash,
      expiresAt: new Date(Date.now() + OTP_EXPIRATION_MINUTES * 60000),
    },
  });

  await sendOtpEmail(email, otp);

  console.log(`Signup OTP for ${email}: ${otp}`);
};

export const verifyOtpAndCreateUser = async (name: string, email: string, code: string) => {
  const otpRecord = await prisma.otp.findFirst({
    where: { email, code, context: 'signup', expiresAt: { gte: new Date() } },
  });

  if (!otpRecord || !otpRecord.meta) throw new Error('Invalid or expired OTP');

  const user = await prisma.user.create({
    data: {
      name,
      email,
      passwordHash: otpRecord.meta,
      isVerified: true,
    },
  });

  await prisma.otp.deleteMany({ where: { email, context: 'signup' } });

  return generateToken(user);
};

function generateToken(user: any) {
  const token = jwt.sign(
    { userId: user.id, role: user.role },
    process.env.JWT_SECRET!,
    { expiresIn: '1h' }
  );
  return { token, user };
}