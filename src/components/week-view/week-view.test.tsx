import * as React from 'react'
import * as renderer from 'react-test-renderer'

import WeekView, { WeekViewProps } from './week-view'

import WEEKS from '../../mocks/data/weeks'
const getPreviousWeek = jest.fn()
const getNextWeek = jest.fn()
const selectDay = jest.fn()
const showAddRehearsal = jest.fn()

describe('WeekView', () => {
  it('renders a week with no rehearsals', () => {
    const props: WeekViewProps = {
      week: WEEKS[0],
      getPreviousWeek,
      getNextWeek,
      selectDay,
      showAddRehearsal
    }
    const view = renderer.create(<WeekView {...props} />)
    expect(view).toMatchSnapshot()
  })

  it('renders a week with rehearsals', () => {
    const props: WeekViewProps = {
      week: WEEKS[1],
      getPreviousWeek,
      getNextWeek,
      selectDay,
      showAddRehearsal
    }
    const view = renderer.create(<WeekView {...props} />)
    expect(view).toMatchSnapshot()
  })
})