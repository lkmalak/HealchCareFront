import { z } from "zod";

export const onboardingSchema = z.object({
  email: z
    .email({ message: 'Invalid email address' })
    .min(1, { message: 'Please enter your email' })
    ,
  password: z
    .string()
    .min(8, {
      message: 'Please enter your password',
    })
    .max(100, {
      message: 'Password must be at most 100 characters long',
    }),
  name: z.string().min(2).max(100),
  confirmPassword: z.string().min(8).max(100),
  role: z.enum(["user", "admin"]),
});
