import * as React from 'react'
import * as renderer from 'react-test-renderer'

import WEEKS from '../../mocks/data/weeks'

const didClick = jest.fn()

import WeekViewDayListItem, { WeekViewDayListItemProps } from './week-view-day-list-item'
describe('WeekViewDayListItem', () => {
  it('renders without rehearsals', () => {
    const day = WEEKS[0].days[0]
    const props: WeekViewDayListItemProps = {
      day,
      didClick
    }
    const item = renderer.create(<WeekViewDayListItem {...props} />)
    expect(item).toMatchSnapshot()
  })

  it('renders with rehearsals', () => {
    const day = WEEKS[1].days[2]
    const props: WeekViewDayListItemProps = {
      day, didClick
    }
    const item = renderer.create(<WeekViewDayListItem {...props} />)
    expect(item).toMatchSnapshot()
  })
})