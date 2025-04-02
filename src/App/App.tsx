import { type FC, type JSX, type ReactNode } from 'react'

import {
  ErrorBoundaryProvider,
  NotificationProvider,
  QueryProvider,
  ThemeProvider,
} from '@/providers'

type AppProviderProps = {
  children: ReactNode
}

const App: FC<AppProviderProps> = ({ children }): JSX.Element => {
  return (
    <ErrorBoundaryProvider>
      <ThemeProvider>
        <NotificationProvider>
          <QueryProvider>{children}</QueryProvider>
        </NotificationProvider>
      </ThemeProvider>
    </ErrorBoundaryProvider>
  )
}

export { App }
