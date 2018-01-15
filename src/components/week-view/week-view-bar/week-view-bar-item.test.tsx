import * as React from 'react'
import * as renderer from 'react-test-renderer'

import WeekViewBarItem, { WeekViewBarItemProps } from './week-view-bar-item'

const onClick = jest.fn()

describe('WeekViewBarItem', () => {
  it('renders correctly without rehearsals', () => {
    const withoutRehearsals: WeekViewBarItemProps = {
      dayName: 'S',
      dayNumber: '14',
      hasRehearsals: false,
      onClick
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
      hasRehearsals: true,
      onClick
    }
    const tree = renderer.create(
      <WeekViewBarItem {...withRehearsals} />
    )
    expect(tree).toMatchSnapshot()
  })
})