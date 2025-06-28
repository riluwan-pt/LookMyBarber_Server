import express from 'express';
import {
  requestOtpAfterPassword,
  verifyOtpAndLogin,
//   loginWithGoogle,
  requestSignupOtp,
  verifyOtpAndSignup
} from './auth.controller';

const router = express.Router();

/**
 * @swagger
 * /auth/login/email/request-otp:
 *   post:
 *     summary: Request OTP after verifying email & password
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: OTP sent to your email
 *       400:
 *         description: Invalid request or credentials
 *       401:
 *         description: Unauthorized access
 */

/**
 * @swagger
 * /auth/login/email/verify-otp:
 *   post:
 *     summary: Verify OTP and login the user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - otp
 *             properties:
 *               email:
 *                 type: string
 *               otp:
 *                 type: string
 *     responses:
 *       200:
 *         description: JWT token and user data
 *       400:
 *         description: Invalid or expired OTP
 */

/**
 * @swagger
 * /auth/signup/email/request-otp:
 *   post:
 *     summary: Request OTP for user signup
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: OTP sent to your email for signup
 *       400:
 *         description: User already exists or invalid input
 */

/**
 * @swagger
 * /auth/signup/email/verify-otp:
 *   post:
 *     summary: Verify signup OTP and create user account
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - otp
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               otp:
 *                 type: string
 *     responses:
 *       200:
 *         description: JWT token and user data
 *       400:
 *         description: Invalid or expired OTP
 */


router.post('/login/email/request-otp', requestOtpAfterPassword);
router.post('/login/email/verify-otp', verifyOtpAndLogin);
// router.post('/login/google', loginWithGoogle);


router.post('/signup/email/request-otp', requestSignupOtp);
router.post('/signup/email/verify-otp', verifyOtpAndSignup);
export default router;