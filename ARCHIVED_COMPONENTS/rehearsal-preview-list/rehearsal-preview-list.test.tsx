import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Week from '../../models/week'
import * as moment from 'moment'
const m = moment('1-12-2018', 'MM-DD-YYYY')
const w = new Week(m)

import RehearsalPreviewList, { RehearsalPreviewListProps } from './rehearsal-preview-list'

describe('RehearsalPreviewList', () => {
  it('must have a week', () => {
    const props: RehearsalPreviewListProps = {
      week: w, 
      rehearsals: [] 
    }
    const div = document.createElement('div')
    ReactDOM.render(
      <RehearsalPreviewList {...props} />,
      div
    )
  })
})