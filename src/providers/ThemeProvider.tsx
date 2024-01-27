import { FC } from 'react'

import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'

import { theme } from '@/styles'

type ThemeProviderProps = {
  children: JSX.Element | JSX.Element[]
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }): JSX.Element => {
  return <MantineProvider theme={theme}>{children}</MantineProvider>
}

export { ThemeProvider }
