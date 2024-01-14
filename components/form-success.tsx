import { CheckCircledIcon } from "@radix-ui/react-icons"

interface IFormSuccessProps {
  message?: string
}

export const FormSuccess = ({ message }: IFormSuccessProps) => {
  if (!message) return null
  return (
   <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm">
     <CheckCircledIcon className="w-4 h-4 text-emerald-500" />
     <p className="text-emerald-500">{message}</p>
   </div>
  )
}
