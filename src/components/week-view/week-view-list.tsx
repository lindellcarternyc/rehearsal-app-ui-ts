import * as React from 'react'

import { List } from 'semantic-ui-react'

import WeekViewDay from './week-view-day'

const WeekViewList = (props: {days: {date: string, times?: string[]}[]}): JSX.Element => {
  const items = props.days.map(day => {
    return (
      <WeekViewDay key={day.date} {...day}/>
    )
  })
  return (
    <List relaxed celled>
      {items}
    </List>
  )
}

export default WeekViewList