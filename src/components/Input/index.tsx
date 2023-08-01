import { InputProps } from './types'
import { useInput } from './useInput'

export default function Input({ text, ...rest }: InputProps) {
  const {} = useInput()

  if (text) {
    return (
      <label className="flex flex-col text-xs text-white">
        {text}
        <input
          {...rest}
          className="text-bs font-regular w-full border-b-2 border-lightblue-100 bg-transparent p-1 text-white focus:outline-none"
        />
      </label>
    )
  }

  return (
    <input
      {...rest}
      className="text-bs font-regular w-full border-b-2 border-lightblue-100 bg-transparent p-2 text-center text-white focus:outline-none"
    />
  )
}
