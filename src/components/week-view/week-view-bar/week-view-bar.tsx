import * as React from 'react'
import { Menu, MenuItem } from 'semantic-ui-react'

import WeekViewBarItem, { WeekViewBarItemProps } from './week-view-bar-item'

export interface WeekViewBarProps {
  days: WeekViewBarItemProps[]
  previous: () => void
  next: () => void
}

const WeekViewBar = (props: WeekViewBarProps): JSX.Element => {
  const items = props.days.map(day => {
    return (
      <WeekViewBarItem 
        key={day.dayNumber}
        {...day}
      />
    )
  })
  return (
    <Menu fluid widths={9} fixed='top'>
      <MenuItem 
        key='left' 
        icon='chevron left' 
        onClick={props.previous}
      />
      {items}
      <MenuItem 
        key='right' 
        icon='chevron right'
        onClick={props.next} 
      />
    </Menu>
  )
}

export default WeekViewBar