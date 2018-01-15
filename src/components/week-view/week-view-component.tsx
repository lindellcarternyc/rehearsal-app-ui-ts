import * as React from 'react'

import { Container } from 'semantic-ui-react'

import WeekViewBar, { } from './week-view-bar/week-view-bar'
import WeekViewList from './week-view-list/week-view-list'

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

  const numRehearsalDays = props.days.filter(day => day.times !== undefined).length
  return (
    <div>
      <WeekViewBar days={barDays}/>
      <Container style={{paddingTop: '6rem'}} text>
        {numRehearsalDays > 0 && 
          <WeekViewList days={props.days}/>
        }
        {numRehearsalDays === 0 &&
          'No Rehearsals'
        }
      </Container>
    </div>
  )
}

export default WeekViewComponent