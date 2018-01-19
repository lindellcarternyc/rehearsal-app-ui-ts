import * as React from 'react'

import { Button } from 'semantic-ui-react'
import PageComponent from '../page-component/page-component'
import SelectedMaterialListComponent from '../selected-material-list/selected-material-list-component'

import RehearsalModel from '../../models/rehearsal-model'

export interface RehearsalViewComponentProps {
  date: string
  rehearsal: RehearsalModel
  dismissRehearsal: () => void
}

const RehearsalViewComponent = (props: RehearsalViewComponentProps) => {
  const { date, rehearsal, dismissRehearsal } = props
  const content = () => {
    return (
      <div>
        <SelectedMaterialListComponent
          material={rehearsal.material}
        />
        <Button onClick={dismissRehearsal}>
          Back to Day
        </Button>
      </div>
    )
  }
  
  return (
    <PageComponent 
      title={date} 
      subtitle={rehearsal.time}
      content={content()}
    />
  )
}

export default RehearsalViewComponent