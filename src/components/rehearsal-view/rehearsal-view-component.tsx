import * as React from 'react'

import { Button } from 'semantic-ui-react'
import PageComponent from '../page-component/page-component'
// import SelectedMaterialListComponent from '../selected-material-list/selected-material-list-component'
import SelectedMaterialList from '../selected-material-list/selected-material-list'

import RehearsalModel from '../../models/rehearsal-model'

export interface RehearsalViewComponentProps {
  date: string
  rehearsal: RehearsalModel
  dismissRehearsal: () => void
}

const RehearsalViewComponent = (props: RehearsalViewComponentProps) => {
  const { date, rehearsal, dismissRehearsal } = props
  // const content = () => {
  //   return (
  //     <div>
  //       <SelectedMaterialList
  //         material={rehearsal.material}
  //       />
  //       <Button onClick={dismissRehearsal}>
  //         Back to Day
  //       </Button>
  //     </div>
  //   )
  // }
  
  return (
    <PageComponent title={date} subtitle={rehearsal.time}>
      <SelectedMaterialList material={rehearsal.material}/>
        <Button onClick={dismissRehearsal}>
          Back to Day
        </Button>
    </PageComponent>
  )
}

export default RehearsalViewComponent