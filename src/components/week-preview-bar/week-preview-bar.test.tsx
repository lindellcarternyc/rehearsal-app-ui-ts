import * as React from 'react'
import * as ReactDOM from 'react-dom'

import WeekPreviewBar from './week-preview-bar'

describe('WeekPreviewBar', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<WeekPreviewBar />, div)
  })
})