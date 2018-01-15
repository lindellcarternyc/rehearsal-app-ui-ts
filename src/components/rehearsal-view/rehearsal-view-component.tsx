import * as React from 'react'

import { Container, Header } from 'semantic-ui-react'

export interface RehearsalViewComponentProps {
  date: string
  time: string
}

const RehearsalViewComponent = (props: RehearsalViewComponentProps) => {
  const { date, time } = props
  return (
    <Container text>
      <Header as='h2'>
        {date}
        <Header.Subheader content={time}/>
      </Header>
    </Container>
  )
}

export default RehearsalViewComponent