import * as React from 'react'

import { List } from 'semantic-ui-react'

import WeekViewRehearsalListItem from './week-view-rehearsal-list-item'

const WeekViewRehearsalList = (props: {times: string[]}): JSX.Element | null => {
  if (props.times.length === 0) {
    return null
  }
  const items = props.times.map(time => {
    return (
      <WeekViewRehearsalListItem key={time} time={time} />
    )
  })
  return (
    <List bulleted items={items} />
  )
}

export default WeekViewRehearsalList