import * as React from 'react'

import Page from '../page/page'
import WeekViewMenuBar from '../week-view-menu-bar/week-view-menu-bar'
import WeekViewDayList from '../week-view-day-list/week-view-day-list'

import WeekModel from '../../models/week-model'

export interface WeekViewProps {
  week: WeekModel
  getPreviousWeek: () => void
  getNextWeek: () => void
  selectDay: (dayNumber: number) => void
  showAddRehearsal: () => void
}
const WeekView = (props: WeekViewProps) => {
  return (
    <Page 
      menuBar={(
        <WeekViewMenuBar 
          week={props.week}
          getPreviousWeek={props.getPreviousWeek}
          getNextWeek={props.getNextWeek}
          selectDay={props.selectDay}
        />
      )}
    >
      <WeekViewDayList 
        week={props.week} 
        selectDay={props.selectDay}
        showAddRehearsal={props.showAddRehearsal}
      />
    </Page>
  )
}

export default WeekView