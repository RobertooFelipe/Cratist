import { ButtonProps } from './types'
import { useButton } from './useButton'

export default function Button({ children, ...rest }: ButtonProps) {
  const {} = useButton()

  return (
    <button
      {...rest}
      className="h-12 w-full rounded bg-white transition delay-150 duration-300 ease-out hover:scale-105"
    >
      {children}
    </button>
  )
}
