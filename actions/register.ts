"use server";

import * as z from "zod";
import bcrypt from "bcryptjs"

import { RegistrationSchema } from "@/schemas";
import { db } from "@/lib/db";
import {getUserByEmail} from "@/data/user";

export const register = async (values: z.infer<typeof RegistrationSchema>) => {
  const validatedFields = RegistrationSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!"};
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email)

  if (existingUser) {
    return { error: "User already in use!" };
  }
  debugger;
  await db.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    }
  });


  // TODO: Send email confirmation


  return { success: "Register Success!" };
}
