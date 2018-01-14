import * as React from 'react'

import { ListItem } from 'semantic-ui-react'
 
const WeekViewRehearsalListItem = (props: {time: string}): JSX.Element => { 
  return (
    <ListItem content={props.time} />
  )
}

export default WeekViewRehearsalListItem