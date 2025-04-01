import { type FC, type JSX, type ReactNode } from 'react'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { queryClient } from '@/libs'

type QueryProviderProps = {
  children: ReactNode
}

const QueryProvider: FC<QueryProviderProps> = ({ children }): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export { QueryProvider }
