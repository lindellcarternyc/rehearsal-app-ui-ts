import * as React from 'react'
import * as ReactDOM from 'react-dom'

import WeekPreviewBar from './week-preview-bar'

const cb = jest.fn()
describe('WeekPreviewBar', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <WeekPreviewBar 
        backCallback={cb}
        forwardCallback={cb}
        dayCallback={cb}
      />, 
      div
    )
  })
})