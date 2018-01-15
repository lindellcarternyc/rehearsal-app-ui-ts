import * as React from 'react'

import { Container, Header, Segment, Button } from 'semantic-ui-react'

export interface DayViewComponentProps {
  date: string
  times: string[]
  onClick: () => void
  selectRehearsal: (date: string, time: string) => void
}

const DayViewComponent = (props: DayViewComponentProps): JSX.Element => {
  const timeComponents = props.times.map(time => {
    const selectRehearsal = () => {
      props.selectRehearsal(props.date, time)
    }
    return (
      <Segment key={time}>
        <Button onClick={selectRehearsal}>
          {time}
        </Button>
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