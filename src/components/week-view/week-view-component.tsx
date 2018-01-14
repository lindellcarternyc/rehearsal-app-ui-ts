import * as React from 'react'

import { Container } from 'semantic-ui-react'

import WeekViewBar, { } from './week-view-bar'
import WeekViewList from './week-view-list'

export interface WeekViewComponentProps {
  days: {
    date:   string
    times?: string[]
  }[]
}

export const WeekViewComponent = (props: WeekViewComponentProps): JSX.Element => {
  const barDays = props.days.map(day => {
    const dayName = day.date.charAt(0)
    const dayNumber = day.date.split(' ')[2]
    const hasRehearsals = day.times !== undefined && day.times.length > 0
    return { dayName, dayNumber, hasRehearsals }
  })
  return (
    <div>
      <WeekViewBar days={barDays}/>
      <Container style={{paddingTop: '6rem'}} text>
        <WeekViewList days={props.days}/>
      </Container>
    </div>
  )
}

export default WeekViewComponent