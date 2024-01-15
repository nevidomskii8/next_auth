"use server";

import * as z from "zod";
import { RegistrationSchema } from "@/schemas";

export const register = async (values: z.infer<typeof RegistrationSchema>) => {
  const validatedFields = RegistrationSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!"};
  }

  return { success: "Register Success!" };
}
