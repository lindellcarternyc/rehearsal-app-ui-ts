import * as React from 'react'
import * as ReactDOM from 'react-dom'

import SchedulePreview from './schedule-preview'
import { SchedulePreviewProps } from './schedule-preview'

describe('SchedulePreview', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(
      <SchedulePreview />,
      div
    )
  })

  it('should have a default week prop that is this week', () => {
    expect(SchedulePreviewProps).not.toBeUndefined()
  })
})