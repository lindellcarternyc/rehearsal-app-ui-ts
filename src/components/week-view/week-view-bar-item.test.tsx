import * as React from 'react'
import * as renderer from 'react-test-renderer'

import WeekViewBarItem, { WeekViewBarItemProps } from './week-view-bar-item'

describe('WeekViewBarItem', () => {
  it('renders correctly without rehearsals', () => {
    const withoutRehearsals: WeekViewBarItemProps = {
      dayName: 'S',
      dayNumber: '14',
      hasRehearsals: false
    }
    const tree = renderer.create(
      <WeekViewBarItem {...withoutRehearsals} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with rehearsals', () => {
    const withRehearsals: WeekViewBarItemProps = {
      dayName: 'T',
      dayNumber: '16',
      hasRehearsals: true
    }
    const tree = renderer.create(
      <WeekViewBarItem {...withRehearsals} />
    )
    expect(tree).toMatchSnapshot()
  })
})