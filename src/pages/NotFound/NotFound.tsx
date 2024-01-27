import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, Center, Flex } from '@mantine/core'

const NotFound: FC = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <Center h="100%">
      <Flex direction="column" pt="xl">
        <div>Page Not Found</div>

        <Button my="md" onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </Flex>
    </Center>
  )
}

export { NotFound }
