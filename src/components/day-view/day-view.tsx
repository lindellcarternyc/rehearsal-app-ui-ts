import * as React from 'react'

import { Button } from 'semantic-ui-react'
import Page from '../page/page'
import RehearsalList from '../rehearsal-list/rehearsal-list'

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
  const numRehearsals = rehearsals.length

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
      <RehearsalList 
        rehearsals={rehearsals}
        selectRehearsal={props.selectRehearsal}
        showEditRehearsal={props.showEditRehearsal}
        cancelRehearsal={props.cancelRehearsal}
      />
    </Page>
  )
}

export default DayView