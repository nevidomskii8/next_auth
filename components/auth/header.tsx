import { Poppins } from 'next/font/google';

import { cn } from '@/lib/utils';

const font = Poppins({
  subsets: ['latin'],
  weight: ["600"],
})

interface IHeaderProps {
  label: string;
}

export const Header = ({label}: IHeaderProps) => {
  return (
   <div className="w-full flex flex-col items-center justify-center gap-y-4">
      <h1 className={cn("text-3xl font-semibold", font.className)}>
        🔐Auth
      </h1>
      <p className="text-sm text-muted-foreground">
        {label}
      </p>
   </div>
  )
};
