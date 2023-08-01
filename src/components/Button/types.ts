import { ButtonHTMLAttributes } from 'react'

type HTMLButtonProps = ButtonHTMLAttributes<HTMLElement>

export type ButtonProps = {
  children: React.ReactNode
} & HTMLButtonProps
