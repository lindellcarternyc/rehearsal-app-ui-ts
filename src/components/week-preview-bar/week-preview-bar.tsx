import * as React from 'react'

import { Menu, Icon, } from 'semantic-ui-react'
import WeekPreviewBarDay from '../week-preview-bar-day'

const dayPreviews = (
    callback: (num: Number) => void
  ): JSX.Element[] => {
  return 'SMTWTFS'.split('').map((day, num) => {
    return (
      <Menu.Item key={num} onClick={() => {callback(num)}}>
        <WeekPreviewBarDay day={day} num={num + 1} />
      </Menu.Item>
    )
  })
}

interface WeekPreviewBarProps {
  backCallback: () => void
  forwardCallback: () => void 
  dayCallback: (num: number) => void
}
const WeekPreviewBar = (props: WeekPreviewBarProps): JSX.Element => {
  const { backCallback, forwardCallback, dayCallback } = props
  return (
    <Menu fluid widths={9}>
      <Menu.Item onClick={backCallback}>
        <Icon name='chevron left' />
      </Menu.Item>
      {dayPreviews(dayCallback)}
      <Menu.Item onClick={forwardCallback}>
        <Icon name='chevron right' />
      </Menu.Item>
    </Menu>
  )
}

export default WeekPreviewBar