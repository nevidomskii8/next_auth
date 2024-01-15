import * as z from 'zod';

export const LoginSchema = z.object({
  password: z.string().min(3, {
    message: "Please enter your password."
  }),
  email: z.string().email({
    message: "Please enter a valid email address."
  }),
});

export const RegistrationSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum of 6 characters required."
  }),
  email: z.string().email({
    message: "Please enter a valid email address."
  }),
  name: z.string().min(1, {
    message: "Name is required."
  }),
});
