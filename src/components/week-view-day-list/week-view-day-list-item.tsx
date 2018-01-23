import * as React from 'react'
import { List } from 'semantic-ui-react'
import WeekViewDayListItemContent from './week-view-day-list-item-content'

import RehearsalModel from '../../models/rehearsal-model'

export interface WeekViewDayListItemProps {
  day: {
    date: string
    rehearsals?: RehearsalModel[]
  }
  didClick: () => void
}
const WeekViewDayListItem = (props: WeekViewDayListItemProps) => {
  return (
    <List.Item onClick={props.didClick}>
      <List.Header content={props.day.date} />
      <WeekViewDayListItemContent rehearsals={props.day.rehearsals}/>
    </List.Item>
  )
}

export default WeekViewDayListItem