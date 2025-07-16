import { render, screen } from '@testing-library/react'
import Navbar from './'

describe('Navbar', () => {
  it('should render correctly', () => {
    render(<Navbar />)
    expect(screen.getByText('Ecommerce')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Categories')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })
})
