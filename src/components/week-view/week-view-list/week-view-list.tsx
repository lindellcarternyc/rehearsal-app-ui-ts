import * as React from 'react'

import { List } from 'semantic-ui-react'

import WeekViewDay, { WeekViewDayProps } from './week-view-day'

export interface WeekViewListProps {
  days: WeekViewDayProps[]
}

const WeekViewList = (props: WeekViewListProps): JSX.Element => {
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