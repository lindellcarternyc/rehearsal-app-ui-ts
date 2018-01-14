import * as React from 'react'

import { ListItem } from 'semantic-ui-react'

export interface RehearsalPreviewListItemProps {
  startTime: string
  endTime: string
}

const RehearsalPreviewListItem = (props: RehearsalPreviewListItemProps) => {
  const { startTime, endTime } = props
  return (
    <ListItem>{startTime} - {endTime}</ListItem>
  )
}

export default RehearsalPreviewListItem