import * as React from 'react'
import * as ReactDOM from 'react-dom'

import WeekPreviewBar from './week-preview-bar'
import Week from '../../models/week'
import * as moment from 'moment'

const cb = jest.fn()
describe('WeekPreviewBar', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div')
    const week = new Week(moment())
    ReactDOM.render(
      <WeekPreviewBar 
        backCallback={cb}
        forwardCallback={cb}
        dayCallback={cb}
        week={week}
      />, 
      div
    )
  })
})