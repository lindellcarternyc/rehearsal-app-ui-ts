import * as React from 'react'

import { List, Header, Button } from 'semantic-ui-react'

import WeekViewDayListItem from './week-view-day-list-item'

import WeekModel from '../../models/week-model'

interface WeekViewDayListProps {
  week: WeekModel
  selectDay: (dayNumber: number) => void
  showAddRehearsal: () => void
}
const WeekViewDayList = (props: WeekViewDayListProps): JSX.Element => {
  const { week } = props
  const { days } = week
  const daysWithRehearsals = days.filter(day => {
    return day.rehearsals !== undefined &&
      day.rehearsals.length > 0
  })
  if (daysWithRehearsals.length > 0) {
    const items = props.week.days.map((day, idx) => {
      const didClick = () => {
        props.selectDay(idx)
      }
      return (
        <WeekViewDayListItem 
          key={day.date + idx.toString()}
          day={day}
          didClick={didClick}
        />
      )
    })
    return (
      <List relaxed divided selection>
        {items}
      </List>
    )
  } else {
    const start = days[0].date
    const end = days[6].date
    return (
      <div>
        <Header as='h3' content={`No Rehearsals ${start} - ${end}`}/>
        <Button content='Add Rehearsal' onClick={props.showAddRehearsal} />
      </div>
    )
  }
}

export default WeekViewDayList