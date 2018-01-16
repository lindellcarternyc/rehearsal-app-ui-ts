import * as React from 'react'
import { ListItem, ListHeader } from 'semantic-ui-react'

import WeekViewRehearsalList from './week-view-rehearsal-list'

export interface WeekViewDayProps {
  date: string
  rehearsals?: {time: string, material: string}[]
}

const WeekViewDay = (props: WeekViewDayProps) => {
  let content: React.ReactNode
  if (props.rehearsals !== undefined && props.rehearsals.length > 0) {
    const rehearsals = props.rehearsals!
    content = (<WeekViewRehearsalList rehearsals={rehearsals}/>)
  } else {
    content = 'No Rehearsals'
  }
  return (
    <ListItem>
      <ListHeader>
        {props.date}
      </ListHeader>
      {content}
    </ListItem>
  )
}

export default WeekViewDay