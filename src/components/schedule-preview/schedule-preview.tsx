import * as React from 'react'

import { Container, Header } from 'semantic-ui-react'

import SchedulePreviewModel from '../../models/schedule-preview'

export interface SchedulePreviewProps {
  model: SchedulePreviewModel
}

const SchedulePreview = (props: SchedulePreviewProps): JSX.Element => {
  const { model } = props
  const { week, rehearsalList } = model
  return (
    <Container text>
      <Header as='h3'>Schedule Preview</Header>
      {rehearsalList.length === 0 && 
        <p>No rehearsals {week.start} - {week.end}</p>
      }
      {rehearsalList.length > 0 &&
        <p>
          {JSON.stringify(week, null, 4)}
        </p>
      }
    </Container>
  )
}

export default SchedulePreview