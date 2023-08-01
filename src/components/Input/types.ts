import { InputHTMLAttributes } from 'react'

type HTMLInputProps = InputHTMLAttributes<HTMLElement>

export type InputProps = {
  text?: string
} & HTMLInputProps
