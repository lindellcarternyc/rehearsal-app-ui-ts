import * as React from 'react'
import * as ReactDOM from 'react-dom'

import SchedulePreview from './schedule-preview'

describe('SchedulePreview', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(
      <SchedulePreview />,
      div
    )
  })
})