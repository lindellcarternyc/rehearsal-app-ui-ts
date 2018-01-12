import * as React from 'react'

import { Menu, Icon, Header } from 'semantic-ui-react'

interface DayPreviewProps  {
  day: string
  num: number
}
const DayPreview = (props: DayPreviewProps): JSX.Element => {
  const { day, num } = props
  return (
    <Header as='h3'>
      <Header.Subheader>
        {day}
      </Header.Subheader>
      {num}
    </Header>
  )
}

const dayPreviews = (
    callback: (num: Number) => void
  ): JSX.Element[] => {
  return 'SMTWTFS'.split('').map((day, num) => {
    const didClick = (evt: React.SyntheticEvent<HTMLElement>) => {
      callback(num)
    }
    return (
      <Menu.Item key={num} onClick={didClick}>
        <DayPreview day={day} num={num + 1} />
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