"use client"

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";


export const Social = () => {
  return (
   <div className="felx items-center w-full justify-between gap-x-3">
     <Button
       size="lg"
       className="w-1/2"
       variant="outline"
       onClick={() => console.log("google")}
     >
        <FcGoogle className="h-5 w-5"/>
     </Button>
     <Button
       size="lg"
       className="w-1/2"
       variant="outline"
       onClick={() => console.log("github")}
     >
        <FaGithub className="h-5 w-5"/>
     </Button>
   </div>
  )
};
