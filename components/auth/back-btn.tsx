"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface IBackButtonProps {
  label: string;
  href: string;
}

export const BackButton = ({ label, href }: IBackButtonProps) => {
  return (
    <Button
      size="sm"
      className="w-full font-normal"
      variant="link"
      asChild
    >
      <Link href={href}>{label}</Link>
    </Button>
  )
}
