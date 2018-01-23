// const rehearsalComponents = rehearsals.map((rehearsal, idx) => {

//   const handleClick = (evt: React.SyntheticEvent<HTMLElement>) => {
//     evt.preventDefault()
//     evt.stopPropagation()

//     if (evt.currentTarget.nodeName === 'BUTTON') {
//       if (evt.currentTarget.id === 'edit') {
//         props.showEditRehearsal(idx)
//       } else {
//         props.cancelRehearsal(idx)
//       }
//     } else {
//       props.selectRehearsal(idx)
//     }
//   }
//   const material = rehearsal.material.map(item => {
//     return (
//       <List.Item key={item} content={item} />
//     )
//   })
import * as React from 'react'
import { Message, Button } from 'semantic-ui-react'

import SelectedMaterialList from '../selected-material-list/selected-material-list'

import RehearsalModel from '../../models/rehearsal-model'

interface RehearsalListItemProps {
  rehearsal: RehearsalModel
  selectRehearsal: () => void
  cancelRehearsal: () => void
  showEditRehearsal: () => void
}
const RehearsalListItem = (props: RehearsalListItemProps) => {
  const { rehearsal } = props

  const handleClick = (evt: React.SyntheticEvent<HTMLElement>) => {
    evt.preventDefault()
    evt.stopPropagation()

    const currentTarget = evt.currentTarget
    switch (currentTarget.nodeName) {
      case 'BUTTON':
        if (currentTarget.id === 'edit-rehearsal') {
          props.showEditRehearsal()
        } else if (currentTarget.id === 'cancel-rehearsal') {
          props.cancelRehearsal()
        } else {
          const msg = 'RANDOM BUTTON'
          throw new Error(msg)
        }
        break
      default:
        props.selectRehearsal()
    }
  }
  return (
    <Message onClick={handleClick}>
      <Message.Header content={rehearsal.time} style={{marginBottom: '1rem'}}/>
      <SelectedMaterialList material={rehearsal.material}/>
      <Button 
        content='Edit' 
        color='blue' 
        id='edit-rehearsal' 
        onClick={handleClick}
      />
      <Button 
        content='Cancel Rehearsal'
        id='cancel-rehearsal' 
        onClick={handleClick}
      />
    </Message>
  )
}

export default RehearsalListItem