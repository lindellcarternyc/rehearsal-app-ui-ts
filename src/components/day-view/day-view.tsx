import * as React from 'react'

import { Message, Button, List } from 'semantic-ui-react'
import Page from '../page/page'

import DayModel from '../../models/day-model'

export interface DayViewProps {
  // models
  day: DayModel

  // callbacks 
  dismiss: () => void
  selectRehearsal: (rehearsalNum: number) => void
  cancelRehearsal: (rehearsalNum: number) => void
  showEditRehearsal: (rehearsalNum: number) => void
  showAddRehearsal: (date: string) => void
}

const DayView = (props: DayViewProps): JSX.Element => {
  const { day } = props
  const rehearsals = day.rehearsals || []
  const rehearsalComponents = rehearsals.map((rehearsal, idx) => {

    const handleClick = (evt: React.SyntheticEvent<HTMLElement>) => {
      evt.preventDefault()
      evt.stopPropagation()

      if (evt.currentTarget.nodeName === 'BUTTON') {
        if (evt.currentTarget.id === 'edit') {
          props.showEditRehearsal(idx)
        } else {
          props.cancelRehearsal(idx)
        }
      } else {
        props.selectRehearsal(idx)
      }
    }
    const material = rehearsal.material.map(item => {
      return (
        <List.Item key={item} content={item} />
      )
    })

    return (
      <Message key={rehearsal.time} onClick={handleClick}>
        <Message.Header content={rehearsal.time} />
        <List bulleted>
          {material}
        </List>
        <Button content='Edit'  color='blue' onClick={handleClick} id='edit'/>
        <Button content='Cancel' onClick={handleClick} />
      </Message>
    )
  })
  const numRehearsals = rehearsalComponents.length
  let subtitle: string
  if (numRehearsals === 0) {
    subtitle = 'No rehearsals'
  } else if (numRehearsals === 1) {
    subtitle = '1 rehearsal'
  } else {
    subtitle = `${numRehearsals} rehearsals`
  }
  return (
    <Page title={day.date} subtitle={subtitle}>
        <Button content='Back to week' onClick={props.dismiss}/>
        <Button content='Add Rehearsal' onClick={() => {props.showAddRehearsal!(day.date)}}/>
        {rehearsals.length > 0 &&
          {rehearsalComponents}
        }
    </Page>
  )
}

export default DayView