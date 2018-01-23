import * as React from 'react'
import * as renderer from 'react-test-renderer'

import WEEKS from '../../mocks/data/weeks'

import WeekViewMenuBar, { WeekViewMenuBarProps } from './week-view-menu-bar'

const getPreviousWeek = jest.fn()
const getNextWeek = jest.fn()
const selectDay = jest.fn()

describe('WeekViewMenuBar', () => {
  it('renders a week without rehearsals', () => {
    const props: WeekViewMenuBarProps = {
      days: WEEKS[0].days,
      getPreviousWeek,
      getNextWeek,
      selectDay
    }
    
    const tree = renderer.create(
      <WeekViewMenuBar {...props} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('renders a week with rehearsals', () => {
    const props: WeekViewMenuBarProps = {
      days: WEEKS[1].days,
      getPreviousWeek,
      getNextWeek,
      selectDay
    }
    const tree = renderer.create(<WeekViewMenuBar {...props} />)
    expect(tree).toMatchSnapshot()
  })
})