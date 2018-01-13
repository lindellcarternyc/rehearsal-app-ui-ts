import * as React from 'react'
import * as ReactDOM from 'react-dom'
// import { shallow } from 'enzyme'

import SchedulePreview from './schedule-preview'
import { SchedulePreviewProps } from './schedule-preview'
import Week from '../../models/week'
import * as moment from 'moment'

describe('SchedulePreview', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div')

    const props: SchedulePreviewProps = {
      week: new Week(moment())
    }
    ReactDOM.render(
      <SchedulePreview {...props}/>,
      div
    )
  })
})