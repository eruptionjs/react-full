import { type ReactElement, isValidElement } from 'react'

import { render } from '@testing-library/react'

import { App } from '@/App'
import { type LoaderFunction, RouterProvider, createMemoryRouter } from '@/libs'

type Route = {
  element: ReactElement
  path: string
  loader?: LoaderFunction
}

function renderWithRouter(
  children: ReactElement | Route,
  routes: Route[] = [],
): ReturnType<typeof render> {
  const options: Route = isValidElement(children)
    ? { element: children, path: '/' }
    : (children as Route)

  const router = createMemoryRouter([{ ...options }, ...routes], {
    initialEntries: [options.path],
    initialIndex: 1,
  })

  return render(<RouterProvider router={router} />, {
    wrapper: ({ children }) => <App>{children}</App>,
  })
}

export { renderWithRouter }
