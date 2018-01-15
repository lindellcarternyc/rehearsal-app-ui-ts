import * as React from 'react'

import { Container, Header, Button } from 'semantic-ui-react'

export interface RehearsalViewComponentProps {
  date: string
  time: string
  material: string
  dismissRehearsal: () => void
}

const RehearsalViewComponent = (props: RehearsalViewComponentProps) => {
  const { date, time, material } = props
  return (
    <Container text>
      <Header as='h2'>
        {date}
        <Header.Subheader content={time}/>
      </Header>
      <Button onClick={props.dismissRehearsal}>
        Back to Day
      </Button>
      <p style={{marginTop: '1rem'}}>{material}</p>
    </Container>
  )
}

export default RehearsalViewComponent