import { type FC } from 'react'

import { Spinner } from '@/components'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from '@/libs'

const RouterStack = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        hydrateFallbackElement={<Spinner />}
        lazy={async () => {
          const { Home } = await import('@/pages/Home')
          return {
            Component: Home,
          }
        }}
      />

      <Route
        path="*"
        hydrateFallbackElement={<Spinner />}
        lazy={async () => {
          const { NotFound } = await import('@/pages/NotFound')
          return {
            Component: NotFound,
          }
        }}
      />
    </>,
  ),
)

const Router: FC = () => {
  return <RouterProvider router={RouterStack} />
}

export { Router }
