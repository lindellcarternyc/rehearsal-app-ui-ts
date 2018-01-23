import * as React from 'react'
import * as renderer from 'react-test-renderer'

import WeekViewDayListItemContent, { WeekViewDayListItemContentProps } from './week-view-day-list-item-content'

describe('WeekViewDayListItemContent', () => {
  it('renders without rehearsals', () => {
    const props: WeekViewDayListItemContentProps = {
      rehearsals: []
    }
    const content = renderer.create(<WeekViewDayListItemContent {...props} />)
    expect(content).toMatchSnapshot()
  })

  it('renders with rehearsals', () => {
    const props: WeekViewDayListItemContentProps = {
      rehearsals: [
        {time: '19:00 - 21:00', material: ['Act I: Scene 1']}
      ]
    }
    const content = renderer.create(<WeekViewDayListItemContent {...props} />)
    expect(content).toMatchSnapshot()
  })
})