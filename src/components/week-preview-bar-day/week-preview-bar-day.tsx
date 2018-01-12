import * as React from 'react'
import { Header } from 'semantic-ui-react'

interface DayPreviewProps  {
  date: number
  name: string
}
const WeekPreviewBarDay = (props: DayPreviewProps): JSX.Element => {
  const { date, name } = props
  return (
    <Header as='h3'>
      <Header.Subheader>
        {name}
      </Header.Subheader>
      {date}
    </Header>
  )
}

export default WeekPreviewBarDay