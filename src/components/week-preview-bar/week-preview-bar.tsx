import * as React from 'react'

import { Menu, Icon, } from 'semantic-ui-react'
import WeekPreviewBarDay from '../week-preview-bar-day'

const dayPreviews = (
    callback: (num: Number) => void,
    week: Week
  ): JSX.Element[] => {

  // return 'SMTWTFS'.split('').map((day, num) => {
  //   return (
  //     <Menu.Item key={num} onClick={() => {callback(num)}}>
  //       <WeekPreviewBarDay day={day} num={num + 1} />
  //     </Menu.Item>
  //   )
  // })
  return week.days.map((day, idx) => {
    return (
      <Menu.Item key={idx} onClick={() => {callback(day.date)}}>
        <WeekPreviewBarDay {...day}/>
      </Menu.Item>
    )
  })
}

import Week from '../../models/week'

interface WeekPreviewBarProps {
  backCallback: () => void
  forwardCallback: () => void 
  dayCallback: (num: number) => void
  week: Week 
}
const WeekPreviewBar = (props: WeekPreviewBarProps): JSX.Element => {
  const { backCallback, forwardCallback, dayCallback, week } = props
  return (
    <Menu fluid widths={9} fixed='top'>
      <Menu.Item onClick={backCallback}>
        <Icon name='chevron left' />
      </Menu.Item>
      {dayPreviews(dayCallback, week)}
      <Menu.Item onClick={forwardCallback}>
        <Icon name='chevron right' />
      </Menu.Item>
    </Menu>
  )
}

export default WeekPreviewBar