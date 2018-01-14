import * as React from 'react'

import { Container, Header } from 'semantic-ui-react'
import RehearsalPreviewList from '../rehearsal-preview-list/rehearsal-preview-list'

import SchedulePreviewModel from '../../models/schedule-preview'

export interface SchedulePreviewProps {
  model: SchedulePreviewModel
}

const ContainerStyles = {
  paddingTop: '6rem'
}

const SchedulePreview = (props: SchedulePreviewProps): JSX.Element => {
  const { model } = props
  const { week, rehearsalList } = model
  return (
    <Container text style={ContainerStyles}>
      <Header as='h3'>Schedule Preview</Header>
      {rehearsalList.length === 0 && 
        <p>No rehearsals {week.start} - {week.end}</p>
      }
      {rehearsalList.length > 0 &&
        <RehearsalPreviewList week={week} rehearsals={rehearsalList} />
      }
    </Container>
  )
}

export default SchedulePreview