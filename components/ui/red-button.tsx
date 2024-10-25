import { ButtonHTMLAttributes } from 'react'

interface RedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export default function RedButton({ children, ...props }: RedButtonProps) {
  return (
    <button
      className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
      {...props}
    >
      {children}
    </button>
  )
}