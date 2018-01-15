import * as React from 'react'

import { Container } from 'semantic-ui-react'

import WeekViewBar, { } from './week-view-bar/week-view-bar'
import WeekViewList from './week-view-list/week-view-list'

export interface WeekViewComponentData {
  days: {
    date:   string
    times?: string[]
  }[]
}

export interface WeekViewComponentProps extends WeekViewComponentData {
  previous: () => void
  next: () => void
}

const EMPTY_WEEK_VIEW_LIST_STYLES = {
  textAlign: 'center', 
  marginTop: '25%',
}

const emptyWeekViewListDate = (date: string): string => {
  const comps = date.split(' ')
  return `${comps[1].slice(0, 3)} ${comps[2]}`
}

const EmptyWeekViewList = (props: {start: string, end: string}) => {
  const start = emptyWeekViewListDate(props.start)
  const end = emptyWeekViewListDate(props.end)

  return (
    <p 
      style={EMPTY_WEEK_VIEW_LIST_STYLES}
    >
      No Rehearsals for {start} - {end}
    </p>
  )
}

export const WeekViewComponent = (props: WeekViewComponentProps): JSX.Element => {
  const { days } = props
  const barDays = days.map(day => {
    const dayName = day.date.charAt(0)
    const dayNumber = day.date.split(' ')[2]
    const hasRehearsals = day.times !== undefined && day.times.length > 0
    return { dayName, dayNumber, hasRehearsals }
  })

  const numRehearsalDays = days.filter(
    day => day.times !== undefined
  ).length
  return (
    <div>
      <WeekViewBar 
        days={barDays} 
        previous={props.previous}
        next={props.next}
      />
      <Container style={{paddingTop: '6rem'}} text>
        {numRehearsalDays > 0 && 
          <WeekViewList days={days}/>
        }
        {numRehearsalDays === 0 &&
          <EmptyWeekViewList 
            start={days[0].date} 
            end={days[6].date} 
          />
        }
      </Container>
    </div>
  )
}

export default WeekViewComponent