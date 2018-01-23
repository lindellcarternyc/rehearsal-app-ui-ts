import * as React from 'react'
import * as renderer from 'react-test-renderer'

import WeekViewDayList, { WeekViewDayListProps } from './week-view-day-list'

import WEEKS from '../../mocks/data/weeks'
const selectDay = jest.fn()
const showAddRehearsal = jest.fn()

describe('WeekViewDayList', () => {
  it('renders without rehearsals', () => {
    const props: WeekViewDayListProps = {
      week: WEEKS[0],
      selectDay,
      showAddRehearsal
    }
    const list = renderer.create(<WeekViewDayList {...props} />)
    expect(list).toMatchSnapshot()
  })

  it('renders with rehearsal', () => {
    const props: WeekViewDayListProps = {
      week: WEEKS[1],
      selectDay,
      showAddRehearsal
    }
    const list = renderer.create(<WeekViewDayList {...props} />)
    expect(list).toMatchSnapshot()
  })
})