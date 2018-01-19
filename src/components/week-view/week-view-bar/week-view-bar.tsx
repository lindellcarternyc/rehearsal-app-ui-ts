import * as React from 'react'
import { Menu, MenuItem } from 'semantic-ui-react'

import WeekViewBarItem, { WeekViewBarItemProps } from './week-view-bar-item'

export interface WeekViewBarProps {
  days: WeekViewBarItemProps[]
  previous: () => void
  next: () => void
  selectDay: (dayId: number) => void
  marginTop?: string
}

const WeekViewBar = (props: WeekViewBarProps): JSX.Element => {
  const style = props.marginTop !== undefined ?
    {
      marginTop: props.marginTop
    } :
    undefined
  const items = props.days.map((day, idx) => {
    const click = () => {
      props.selectDay(idx)
    }
    return (
      <WeekViewBarItem 
        key={day.dayNumber}
        {...day}
        onClick={click}
      />
    )
  })
  return (
    <Menu fluid widths={9} style={style} fixed='top'>
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