import * as z from 'zod';

export const LoginSchema = z.object({
  password: z.string().min(1, {
    message: "Please enter your password."
  }),
  email: z.string().email({
    message: "Please enter a valid email address."
  }),
});
