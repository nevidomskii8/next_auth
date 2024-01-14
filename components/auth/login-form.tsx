"use client";

import * as z from "zod";

import { useForm } from "react-hook-form";
import { zodResolver }  from "@hookform/resolvers/zod";

import { LoginSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  FormField
} from "@/components/ui/form";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import {FormSuccess} from "@/components/form-success";

export const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log(values);
  }

  return (
   <CardWrapper
      labelHeader="Welcome back!"
      backBntLabel="Don't have an account?"
      backBtnHref="/auth/register"
      showSocial
   >
     <Form {...form}>
       <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
       >
         <div className="space-y-4">
           <FormField
             name="email"
             render={({field }) => {
               return (
                <FormItem>
                  <FormControl>
                    <>
                      <FormLabel>Email</FormLabel>
                      <Input
                       {...field}
                       type="email"
                       placeholder="email@example.com"
                       className="w-full"
                      />
                    </>
                  </FormControl>
                  <FormMessage>
                   {form.formState.errors.email?.message}
                  </FormMessage>
                </FormItem>
              )
            }}
            control={form.control}
           />
           <FormField
             name="password"
             render={({field }) => {
               return (
                <FormItem>
                  <FormControl>
                    <>
                      <FormLabel>Password</FormLabel>
                      <Input
                       {...field}
                       type="password"
                       placeholder="******"
                       className="w-full"
                      />
                    </>
                  </FormControl>
                  <FormMessage>
                   {form.formState.errors.email?.message}
                  </FormMessage>
                </FormItem>
              )
            }}
            control={form.control}
           />
         </div>
         <FormError message="sumsing went wrong" />
         <FormSuccess message="Email sent!" />
         <Button type="submit" className="w-full">
           Login
         </Button>
       </form>
     </Form>
   </CardWrapper>
  )
};
