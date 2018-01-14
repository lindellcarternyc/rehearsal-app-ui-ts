import * as React from 'react'
import { ListItem, ListHeader } from 'semantic-ui-react'

import WeekViewRehearsalList from './week-view-rehearsal-list'

const WeekViewDay = (props: {date: string, times?: string[]}) => {
  // const content = props.times !== undefined ?
  //   'No Rehearsals' :
  //   <WeekViewRehearsalList times={props.times!} />

  let content: React.ReactNode
  if (props.times !== undefined) {
    const times = props.times
    content = (<WeekViewRehearsalList times={times}/>)
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