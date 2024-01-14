import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

interface IFormErrorProps {
  message?: string
}

export const FormError = ({ message }: IFormErrorProps) => {
  if (!message) return null
  return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <ExclamationTriangleIcon className="w-4 h-4 text-red-500" />
      <p className="text-red-500">{message}</p>
    </div>
  )
}
