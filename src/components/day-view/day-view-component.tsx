import * as React from 'react'

import { Container, Header, Segment, Button } from 'semantic-ui-react'

export interface DayViewComponentProps {
  date: string
  times: string[]
  onClick: () => void
}

const DayViewComponent = (props: DayViewComponentProps): JSX.Element => {
  const timeComponents = props.times.map(time => {
    return (
      <Segment key={time}>
        {time}
      </Segment>
    )
  })
  return (
    <Container>
      <Header as='h2' content={props.date} />
      <Button content='Back to week' onClick={props.onClick}/>
      {timeComponents}
    </Container>
  )
}

export default DayViewComponent