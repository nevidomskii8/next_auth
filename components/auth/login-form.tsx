import { CardWrapper } from "@/components/auth/card-wrapper";

export const LoginForm = () => {
  return (
   <CardWrapper
      labelHeader="Welcome back!"
      backBntLabel="Don't have an account?"
      backBtnHref="/auth/register"
      showSocial
   >
     Login form!
   </CardWrapper>
  )
};
