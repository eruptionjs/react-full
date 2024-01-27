import { FC } from 'react'

import { Notifications } from '@mantine/notifications'

type NotificationsProps = {
  children: unknown
}

const NotificationProvider: FC<NotificationsProps> = ({ children }) => {
  return (
    <>
      <Notifications position="top-right" />
      {children}
    </>
  )
}

export { NotificationProvider }
