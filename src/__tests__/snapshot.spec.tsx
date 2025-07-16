import Home from '@/app/(public)/(home)/page'
import Providers from '@/providers/Providers'
import { render } from '@testing-library/react'

it('renders homepage unchanged', () => {
  const { container } = render(
    <Providers>
      <Home />
    </Providers>
  )
  expect(container).toMatchSnapshot()
})
