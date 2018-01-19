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
  const { date, rehearsal } = props
  return (
    <PageComponent title={date} subtitle={rehearsal.time}>
      {/* <Header as='h2'>
        {date}
        <Header.Subheader content={rehearsal.time}/>
      </Header> */}
      <SelectedMaterialListComponent
        material={rehearsal.material}
      />
      <Button onClick={props.dismissRehearsal}>
        Back to Day
      </Button>
    </PageComponent>
  )
}

export default RehearsalViewComponent