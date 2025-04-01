import { screen } from '@testing-library/react'

import { renderWithRouter } from '@/libs'
import { NotFound } from '@/pages'

describe('Home Page', () => {
  it('should render the NotFound Page at home URL', async () => {
    renderWithRouter({ element: <NotFound />, path: '/not-found' })

    expect(screen.getByText('Page Not Found')).toBeInTheDocument()
    expect(screen.getByText('Back to Home')).toBeInTheDocument()
  })
})
