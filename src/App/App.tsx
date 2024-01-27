import {
  ErrorBoundaryProvider,
  NotificationProvider,
  QueryProvider,
  ThemeProvider,
} from '@/providers'
import { Routes } from '@/routes'

const App = () => {
  return (
    <ErrorBoundaryProvider>
      <ThemeProvider>
        <NotificationProvider>
          <QueryProvider>
            <Routes />
          </QueryProvider>
        </NotificationProvider>
      </ThemeProvider>
    </ErrorBoundaryProvider>
  )
}

export { App }
