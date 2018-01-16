import * as React from 'react'

import { Container, Header, Button } from 'semantic-ui-react'

import RehearsalModel from '../../models/rehearsal-model'

export interface RehearsalViewComponentProps {
  date: string
  rehearsal: RehearsalModel
  dismissRehearsal: () => void
}

const RehearsalViewComponent = (props: RehearsalViewComponentProps) => {
  const { date, rehearsal } = props
  return (
    <Container text>
      <Header as='h2'>
        {date}
        <Header.Subheader content={rehearsal.time}/>
      </Header>
      <Button onClick={props.dismissRehearsal}>
        Back to Day
      </Button>
      <p style={{marginTop: '1rem'}}>{rehearsal.material}</p>
    </Container>
  )
}

export default RehearsalViewComponent