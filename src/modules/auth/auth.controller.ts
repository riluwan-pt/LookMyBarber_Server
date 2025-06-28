import { Request, Response } from 'express';
import * as AuthService from './auth.service';
import { log } from 'console';



export const requestOtpAfterPassword = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }
    log('Requesting OTP for email:', email, 'with password:', password);
    await AuthService.verifyEmailPasswordAndSendOtp(email, password);
    return res.json({ message: 'OTP sent to your email' });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export const verifyOtpAndLogin = async (req: Request, res: Response) => {
  try {
    const { email, otp } = req.body;
    const result = await AuthService.verifyOtpAndGenerateToken(email, otp);
    return res.json(result);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

// export const loginWithGoogle = async (req: Request, res: Response) => {
//   const { token } = req.body;
//   log('Google login token:', token);
//   if (!token) { 
//     return res.status(400).json({ error: 'Token is required' });
//   }
//   const result = await AuthService.googleLogin(token);
//   res.json(result);
// };


export const requestSignupOtp = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    await AuthService.sendOtpForSignup(name, email, password);
    return res.json({ message: 'OTP sent to your email for signup' });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export const verifyOtpAndSignup = async (req: Request, res: Response) => {
  try {
    const { name, email, otp } = req.body;
    const result = await AuthService.verifyOtpAndCreateUser(name, email, otp);
    return res.json(result);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};