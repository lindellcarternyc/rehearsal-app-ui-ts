import * as React from 'react'
import { Header } from 'semantic-ui-react'

interface DayPreviewProps  {
  day: string
  num: number
}
const WeekPreviewBarDay = (props: DayPreviewProps): JSX.Element => {
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

export default WeekPreviewBarDay