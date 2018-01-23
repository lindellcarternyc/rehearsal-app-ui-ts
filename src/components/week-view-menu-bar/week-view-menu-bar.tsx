import * as React from 'react'

import { Menu } from 'semantic-ui-react'

import WeekViewMenuBarItem from './week-view-menu-bar-item'

import WeekModel from '../../models/week-model'

interface WeekViewMenuBarProps {
  week: WeekModel
  getPreviousWeek: () => void
  getNextWeek: () => void
  selectDay: (dayNumber: number) => void
}
const WeekViewMenuBar = (props: WeekViewMenuBarProps): JSX.Element => {
  return (
    <Menu fixed='top' fluid  widths={9} style={{marginTop: '3.5rem'}}>
      <Menu.Item icon='chevron left' onClick={props.getPreviousWeek}/>
      {props.week.days.map((day, idx) => {
        const didClick = () => {
          props.selectDay(idx)
        }
        return (
          <Menu.Item key={day.date + idx.toString(10)} onClick={didClick}>
            <WeekViewMenuBarItem day={day} />
          </Menu.Item> 
        )
      })}
      <Menu.Item icon='chevron right' onClick={props.getNextWeek}/>
    </Menu>
  )
}

export default WeekViewMenuBar