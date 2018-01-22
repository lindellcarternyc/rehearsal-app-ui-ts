import * as React from 'react'

import { Button } from 'semantic-ui-react'
import Page from '../page/page'
import SelectedMaterialList from '../selected-material-list/selected-material-list'

import RehearsalModel from '../../models/rehearsal-model'

export interface RehearsalViewProps {
  date: string
  rehearsal: RehearsalModel
  dismissRehearsal: () => void
}

const RehearsalView = (props: RehearsalViewProps) => {
  const { date, rehearsal, dismissRehearsal } = props
  
  return (
    <Page title={date} subtitle={rehearsal.time}>
      <SelectedMaterialList material={rehearsal.material}/>
        <Button onClick={dismissRehearsal}>
          Back to Day
        </Button>
    </Page>
  )
}

export default RehearsalView