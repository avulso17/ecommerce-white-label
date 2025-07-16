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

  it('logo should redirect to homepage when click', () => {
    render(<Navbar />)

    const LogoEl = screen.getByRole('link', { name: /logo Ecommerce/i })
    expect(LogoEl).toHaveAttribute('href', '/')
  })

  it('home link should redirect to homepage when click', () => {
    render(<Navbar />)

    const homeLink = screen.getByRole('link', { name: /home/i })
    expect(homeLink).toHaveAttribute('href', '/')
  })

  it('cart button should redirect to cartpage when click', () => {
    render(<Navbar />)

    const cartBtn = screen
      .getAllByRole('link')
      .find((link) => link.getAttribute('href') === '/cart')
    expect(cartBtn).toBeInTheDocument()
  })

  it('profile button should redirect to profilepage when click', () => {
    render(<Navbar />)

    const profileBtn = screen
      .getAllByRole('link')
      .find((link) => link.getAttribute('href') === '/profile')
    expect(profileBtn).toBeInTheDocument()
  })
})
