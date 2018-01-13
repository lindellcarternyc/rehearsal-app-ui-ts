import * as React from 'react'

import { Container } from 'semantic-ui-react'

import Week from '../../models/week'

export interface SchedulePreviewProps {
  week?: Week
}

const SchedulePreview = (props: SchedulePreviewProps): JSX.Element => {
  const { week } = props
  return (
    <Container text>
      Schedule preview
      <p>
        {JSON.stringify(week, null, 4)}
      </p>
    </Container>
  )
}

export default SchedulePreview