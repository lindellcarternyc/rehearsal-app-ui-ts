import * as React from 'react'

import { Message, Button, List } from 'semantic-ui-react'
import PageComponent from '../page-component/page-component'

import RehearsalModel from '../../models/rehearsal-model'
export interface DayViewComponentProps {
  date: string
  rehearsals: RehearsalModel[]
  onClick: () => void
  selectRehearsal: (rehearsalNum: number) => void
  cancelRehearsal: (rehearsalNum: number) => void
  showEditRehearsal: (rehearsalNum: number) => void
  showAddRehearsal: (date: string) => void
}

const DayViewComponent = (props: DayViewComponentProps): JSX.Element => {
  const rehearsalComponents = props.rehearsals.map((rehearsal, idx) => {

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
        {/* <p style={{paddingTop: '1rem'}}>{rehearsal.material}</p> */}
        <List bulleted>
          {material}
        </List>
        <Button content='Edit'  color='blue' onClick={handleClick} id='edit'/>
        <Button content='Cancel' onClick={handleClick} />
      </Message>
    )
  })
  return (
    <PageComponent title={props.date}>
      <Button content='Back to week' onClick={props.onClick}/>
      <Button content='Add Rehearsal' onClick={() => {props.showAddRehearsal(props.date)}}/>
      {props.rehearsals.length > 0 && rehearsalComponents}
      {props.rehearsals.length === 0 && <p style={{paddingTop: '1rem'}}>No Rehearsals</p>}
    </PageComponent>
  )
}

export default DayViewComponent