import * as React from 'react'

import RehearsalListItem from './rehearsal-list-item'

import RehearsalModel from '../../models/rehearsal-model'

interface RehearsalListProps {
  rehearsals: RehearsalModel[]
  selectRehearsal: (rehearsalNum: number) => void
  showEditRehearsal: (rehearsalNum: number) => void
  cancelRehearsal: (rehearsalNum: number) => void
}
const RehearsalList = (props: RehearsalListProps): JSX.Element | null => {
  const { rehearsals } = props
  if (rehearsals.length > 0) {
    const items = rehearsals.map((rehearsal, idx) => {
      const selectRehearsal = () => {
        props.selectRehearsal(idx)
      }
      const showEditRehearsal = () => {
        props.showEditRehearsal(idx)
      }
      const cancelRehearsal = () => {
        props.cancelRehearsal(idx)
      }
      return (
        <RehearsalListItem 
          key={idx.toString() + '_' + rehearsal.time}
          rehearsal={rehearsal}
          selectRehearsal={selectRehearsal}
          showEditRehearsal={showEditRehearsal}
          cancelRehearsal={cancelRehearsal}
        />
      )
    })
    return (
      <div style={{marginTop: '1rem'}}>{items}</div>
    )
  } else {
    return null
  }
}

export default RehearsalList