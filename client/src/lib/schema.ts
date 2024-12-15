import { z } from "zod";
export const SignupSchema = z.object({
  name: z.string().min(1, { message: "Username is required" }),
  department: z.string().optional(),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Min length of password should be 8" }),
});
export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: "Password is required" }),
});

export const ForgotPasswordSchema = z.object({
  email: z.string().email(),
});
export const ResetPasswordSchema = z.object({
  newPassword: z
    .string()
    .min(6, { message: "Minimum length of password should be 6" }),
  confirmPassword: z.string().min(1, { message: "Confirm password required" }),
});
export type LoginType = z.infer<typeof LoginSchema>;
export type SignUpType = z.infer<typeof SignupSchema>;
export type ForgotPasswordType = z.infer<typeof ForgotPasswordSchema>;
export type ResetPasswordType = z.infer<typeof ResetPasswordSchema>;