import { type FC } from 'react'
import { useNavigate } from 'react-router'

import { Button, Center, Flex } from '@mantine/core'

const NotFound: FC = () => {
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
