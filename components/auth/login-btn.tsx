"use client"

import { useRouter } from "next/navigation";

interface ILoginBtnProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginBtn = ({ children, mode = "redirect", asChild }: ILoginBtnProps) => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/auth/login");
  }

  if (mode === "modal") {
    return (
     <span>
       TODO: implement modal
     </span>
    )
  }

  return (
    <span
      onClick={handleLogin}
      className="cursor-pointer"
    >
      {children}
    </span>
  )
}
