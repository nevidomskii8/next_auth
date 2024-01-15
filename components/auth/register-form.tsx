"use client";

import * as z from "zod";

import { useState, useTransition} from "react";
import { useForm } from "react-hook-form";
import { zodResolver }  from "@hookform/resolvers/zod";

import { RegistrationSchema } from "@/schemas";
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
import { FormSuccess } from "@/components/form-success";
import { register } from "@/actions/register";

export const RegistrationForm = () => {
  const [ error, setError ] = useState<string | undefined>()
  const [ success, setSuccess ] = useState<string | undefined>()
  const [ isPending, startTransition ] = useTransition()
  const form = useForm<z.infer<typeof RegistrationSchema>>({
    resolver: zodResolver(RegistrationSchema),
    defaultValues: {
      email: "",
      password: "",
      name: ""
    }
  });

  const onSubmit = (values: z.infer<typeof RegistrationSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      register(values).then((res) => {
        if (res?.error) {
          setError(res.error)
        } else {
          setSuccess(res.success)
        }
      });
    });
  };

  return (
   <CardWrapper
    labelHeader="Create an account"
    backBntLabel="Already have an account?"
    backBtnHref="/auth/login"
    showSocial
   >
     <Form {...form}>
       <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
       >
         <div className="space-y-4">
           <FormField
            name="name"
            render={({field }) => {
              return (
               <FormItem>
                 <FormControl>
                   <>
                     <FormLabel>Name</FormLabel>
                     <Input
                      {...field}
                      disabled={isPending}
                      placeholder="your name"
                      className="w-full"
                     />
                   </>
                 </FormControl>
                 <FormMessage>
                   {form.formState.errors.name?.message}
                 </FormMessage>
               </FormItem>
              )
            }}
            control={form.control}
           />
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
                      disabled={isPending}
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
                      disabled={isPending}
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
         <FormError message={error} />
         <FormSuccess message={success} />
         <Button disabled={isPending} type="submit" className="w-full">
           Create an account
         </Button>
       </form>
     </Form>
   </CardWrapper>
  )
};
