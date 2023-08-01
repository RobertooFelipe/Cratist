import { render, screen } from '@testing-library/react'
import { InputProps } from './types'
import Input from '.'

describe('<Input />', () => {
  it('should render the heading', () => {
    render(<Input />)

    expect(screen.getByRole('heading', { name: /Input/i })).toBeInTheDocument()
  })
})
