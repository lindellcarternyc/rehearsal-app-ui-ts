import * as React from 'react'

import Page from '../page/page'
import WeekViewMenuBar from '../week-view-menu-bar/week-view-menu-bar'

import RehearsalModel from '../../models/rehearsal-model'

interface WeekViewProps {
  week: {
    days: {
      date: string
      rehearsals?: RehearsalModel[]
    }[]
  }
  getPreviousWeek: () => void
  getNextWeek: () => void
}
const WeekView = (props: WeekViewProps) => {
  return (
    <Page 
      menuBar={(
        <WeekViewMenuBar 
          days={props.week.days}
          getPreviousWeek={props.getPreviousWeek}
          getNextWeek={props.getNextWeek}
        />
      )}
    />
  )
}

export default WeekView