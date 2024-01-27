import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Anchor, Box, Button, Container, Flex, Image, Text, Title } from '@mantine/core'

import { ReactLogo } from '@/assets'

import classes from './Home.module.css'

const Home: FC = (): JSX.Element => {
  const [count, setCount] = useState(0)

  const navigate = useNavigate()

  return (
    <Container
      fluid
      style={{
        height: '100vh',
        color: '#ddd',
        backgroundColor: '#242424',
      }}
    >
      <Flex display="flex" direction="column" justify="center" align="center" h="100%" gap="lg">
        <Flex direction="row" justify="space-around" align="center">
          <Anchor href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <Image src="/icons/favicon.svg" className={classes.logo} alt="Vite logo" />
          </Anchor>

          <Anchor href="https://reactjs.org" target="_blank" rel="noreferrer">
            <ReactLogo />
          </Anchor>

          <Anchor href="https://eruptionjs.dev" target="_blank" rel="noreferrer" underline="never">
            <Text size="60px">🌋</Text>
          </Anchor>
        </Flex>

        <Title order={1}>Vite + React/TS = EruptionJS</Title>

        <Box py="md">
          <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
        </Box>

        <Box>
          <Text ta="center" p="sm">
            Edit <code>src/App.tsx</code> and save to test HMR
          </Text>

          <Text ta="center" p="sm">
            Click on the Vite, React and Eruption logos to learn more.
          </Text>
        </Box>

        <Box>
          <Anchor onClick={() => navigate('/notfound')}>Not Found Page</Anchor>
        </Box>
      </Flex>
    </Container>
  )
}

export { Home }
