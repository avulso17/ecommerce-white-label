import { render, screen } from '@testing-library/react'
import Footer from './'

describe('Footer', () => {
  it('should render correctly', () => {
    render(<Footer />)
    expect(screen.getByText('Ecommerce')).toBeInTheDocument()
    expect(
      screen.getByText(
        'Luna is a white label ecommerce for practical project-based learning.'
      )
    ).toBeInTheDocument()

    expect(screen.getByText('SUPPORT')).toBeInTheDocument()
    expect(screen.getByText('FAQ')).toBeInTheDocument()
    expect(screen.getByText('Terms of use')).toBeInTheDocument()
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()

    expect(screen.getByText('COMPANY')).toBeInTheDocument()
    expect(screen.getByText('About us')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('Careers')).toBeInTheDocument()

    expect(screen.getByText('COMPANY')).toBeInTheDocument()
    expect(screen.getByText('My Account')).toBeInTheDocument()
    expect(screen.getByText('Checkout')).toBeInTheDocument()
    expect(screen.getByText('Cart')).toBeInTheDocument()

    expect(screen.getByText('ACCEPTED PAYMENTS')).toBeInTheDocument()

    expect(
      screen.getByText('© 2025 Luna - Ecommerce. All rights reserved.')
    ).toBeInTheDocument()
  })
})
