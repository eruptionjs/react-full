import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithRouter } from '@/libs'
import { Home } from '@/pages'

describe('Home Page', () => {
  it('should return the correct text', () => {
    renderWithRouter({ element: <Home />, path: '/' })

    expect(screen.getByText('Vite + React/TS = EruptionJS')).toBeInTheDocument()
  })

  it('should return 1 when the user click one time at button', async () => {
    renderWithRouter({ element: <Home />, path: '/' })

    const buttonElement = screen.getByRole('button')
    expect(screen.queryByText('count is 0')).toBeInTheDocument()

    await userEvent.click(buttonElement)

    await waitFor(() => expect(screen.queryByText('count is 1')).toBeInTheDocument())
  })
})
