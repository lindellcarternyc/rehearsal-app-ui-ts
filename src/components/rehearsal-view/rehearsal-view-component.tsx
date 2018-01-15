import * as React from 'react'

import { Container, Header, Button } from 'semantic-ui-react'

export interface RehearsalViewComponentProps {
  date: string
  time: string
  dismissRehearsal: () => void
}

const RehearsalViewComponent = (props: RehearsalViewComponentProps) => {
  const { date, time } = props
  return (
    <Container text>
      <Header as='h2'>
        {date}
        <Header.Subheader content={time}/>
      </Header>
      <Button onClick={props.dismissRehearsal}>
        Back to Day
      </Button>
    </Container>
  )
}

export default RehearsalViewComponent