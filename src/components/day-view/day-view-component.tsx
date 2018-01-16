import * as React from 'react'

import { Container, Header, Message, Button } from 'semantic-ui-react'

import RehearsalModel from '../../models/rehearsal-model'
export interface DayViewComponentProps {
  date: string
  rehearsals: RehearsalModel[]
  onClick: () => void
  selectRehearsal: (rehearsalNum: number) => void
  cancelRehearsal: (rehearsalNum: number) => void
  showAddRehearsal: (date: string) => void
}

const DayViewComponent = (props: DayViewComponentProps): JSX.Element => {
  const rehearsalComponents = props.rehearsals.map((rehearsal, idx) => {

    const handleClick = (evt: React.SyntheticEvent<HTMLElement>) => {
      evt.preventDefault()
      evt.stopPropagation()

      if (evt.currentTarget.nodeName === 'BUTTON') {
        props.cancelRehearsal(idx)
      } else {
        props.selectRehearsal(idx)
      }
    }
    return (
      <Message key={rehearsal.time} onClick={handleClick}>
        <Message.Header content={rehearsal.time} />
        <p style={{paddingTop: '1rem'}}>{rehearsal.material}</p>
        <Button content='Cancel' onClick={handleClick} />
      </Message>
    )
  })
  return (
    <Container>
      <Header as='h2' content={props.date} />
      <Button content='Back to week' onClick={props.onClick}/>
      <Button content='Add Rehearsal' onClick={() => {props.showAddRehearsal(props.date)}}/>
      {props.rehearsals.length > 0 && rehearsalComponents}
      {props.rehearsals.length === 0 && <p style={{paddingTop: '1rem'}}>No Rehearsals</p>}
    </Container>
  )
}

export default DayViewComponent