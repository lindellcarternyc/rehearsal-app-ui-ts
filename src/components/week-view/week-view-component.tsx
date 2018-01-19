import * as React from 'react'

import PageComponent from '../page-component/page-component'

import WeekViewBar, { } from './week-view-bar/week-view-bar'
import WeekViewList from './week-view-list/week-view-list'

import RehearsalModel from '../../models/rehearsal-model'

export interface WeekViewComponentData {
  days: {
    date:   string
    rehearsals?: RehearsalModel[]
  }[]
}

export interface WeekViewComponentProps extends WeekViewComponentData {
  previous: () => void
  next: () => void
  selectDay: (dayId: number) => void
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
  const barDays = days.map((day, idx) => {
    const dayName = day.date.charAt(0)
    const dayNumber = day.date.split(' ')[2]
    const hasRehearsals = day.rehearsals !== undefined && day.rehearsals.length > 0
    const onClick = () => {
      return
    }
    return { dayName, dayNumber, hasRehearsals, onClick }
  })

  const numRehearsalDays = days.filter(
    day => day.rehearsals !== undefined
  ).length

  const getContent = (): JSX.Element | null => {
    if (numRehearsalDays === 0) {
      return (
        <EmptyWeekViewList 
          start={days[0].date}
          end={days[1].date}
        />
      )
    } else if (numRehearsalDays > 0) {
      return (
        <WeekViewList days={days}/>
      )
    } else {
      return null
    }
  }

  const weekViewBar = (): JSX.Element => {

    return (
      <WeekViewBar 
        days={barDays} 
        previous={props.previous}
        next={props.next}
        selectDay={props.selectDay}
        marginTop='3rem'
      />
    )
  }
  return (
    <div>
      <PageComponent
        content={getContent()}
        menuBar={weekViewBar()}
        title='Week View'
      />
    </div>
  )
}

export default WeekViewComponent