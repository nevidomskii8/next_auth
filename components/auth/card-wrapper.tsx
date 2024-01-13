"use client"

import {
  Card,
  CardHeader,
  CardFooter,
  CardContent
} from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { BackButton } from "@/components/auth/back-btn";

interface ICardWrapperProps {
  children: React.ReactNode;
  labelHeader: string;
  backBntLabel?: string;
  backBtnHref?: string;
  showSocial?: boolean;
}


export const CardWrapper = ({
    children,
    labelHeader,
    backBntLabel,
    backBtnHref,
    showSocial = false
}: ICardWrapperProps) => {
  return (
   <Card className="w-[400px] shadow-md">
     <CardHeader>
       <Header label={labelHeader}/>
     </CardHeader>
      <CardContent>
        {children}
      </CardContent>
     {showSocial && (
      <CardFooter>
        <Social/>
      </CardFooter>
     )}
     <CardFooter>
       <BackButton
         label={backBntLabel ?? ""}
         href={backBtnHref ?? "/"}
       />
     </CardFooter>
   </Card>
  )
};
