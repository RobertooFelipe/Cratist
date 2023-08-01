import { render, screen } from '@testing-library/react'
import { ToolbarProps } from './types'
import Toolbar from '.'

describe('<Toolbar />', () => {
  it('should render the heading', () => {
    render(<Toolbar />)

    expect(screen.getByRole('heading', { name: /Toolbar/i })).toBeInTheDocument()
  })
})
