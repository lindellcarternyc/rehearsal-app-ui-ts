import * as React from 'react'
import { Menu, MenuItem } from 'semantic-ui-react'

import WeekViewBarItem, { WeekViewBarItemProps } from './week-view-bar-item'

export interface WeekViewBarProps {
  days: WeekViewBarItemProps[]
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
      <MenuItem icon='chevron left' />
      {items}
      <MenuItem icon='chevron right' />
    </Menu>
  )
}

export default WeekViewBar