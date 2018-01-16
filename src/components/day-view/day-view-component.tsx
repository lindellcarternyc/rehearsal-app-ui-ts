import * as React from 'react'

import { Container, Header, Segment, Button } from 'semantic-ui-react'

export interface DayViewComponentProps {
  date: string
  rehearsals: {time: string, material: string}[]
  onClick: () => void
  selectRehearsal: (rehearsalNum: number) => void
  showAddRehearsal: (date: string) => void
}

const DayViewComponent = (props: DayViewComponentProps): JSX.Element => {
  const rehearsalComponents = props.rehearsals.map((rehearsal, idx) => {
    const selectRehearsal = () => {
      props.selectRehearsal(idx)
    }
    return (
      <Segment key={rehearsal.time}>
        <Button onClick={selectRehearsal}>
          {rehearsal.time}
        </Button>
        <p style={{paddingTop: '1rem'}}>{rehearsal.material}</p>
      </Segment>
    )
  })
  return (
    <Container>
      <Header as='h2' content={props.date} />
      <Button content='Back to week' onClick={props.onClick}/>
      <Button content='Add Rehearsal' onClick={() => {props.showAddRehearsal(props.date)}}/>
      {rehearsalComponents}
    </Container>
  )
}

export default DayViewComponent