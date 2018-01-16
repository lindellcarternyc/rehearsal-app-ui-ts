import * as React from 'react'
import * as renderer from 'react-test-renderer'

import WeekViewBar, { WeekViewBarProps } from './week-view-bar'
import { WeekViewBarItemProps } from './week-view-bar-item'

const onClick = jest.fn()
const previous = jest.fn()
const next = jest.fn()

describe('WeekViewBar', () => {
  it('renders correctly with no rehearsals', () => {
    const days: WeekViewBarItemProps[] = [
      {
        dayName: 'S',
        dayNumber: '14',
        hasRehearsals: false,
        onClick
      },
      {
        dayName: 'M',
        dayNumber: '15',
        hasRehearsals: false,
        onClick
      },
      {
        dayName: 'T',
        dayNumber: '16',
        hasRehearsals: false,
        onClick
      },
      {
        dayName: 'W',
        dayNumber: '17',
        hasRehearsals: false,
        onClick
      },
      {
        dayName: 'T',
        dayNumber: '18',
        hasRehearsals: false,
        onClick
      },
      {
        dayName: 'F',
        dayNumber: '20',
        hasRehearsals: false,
        onClick
      },
      {
        dayName: 'S',
        dayNumber: '20',
        hasRehearsals: false,
        onClick
      }
    ]
    const props: WeekViewBarProps = { days, previous, next }
    const tree = renderer.create(
      <WeekViewBar {...props} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with rehearsals on one day', () => {
    const days: WeekViewBarItemProps[] = [
      {
        dayName: 'S',
        dayNumber: '14',
        hasRehearsals: false,
        onClick
      },
      {
        dayName: 'M',
        dayNumber: '15',
        hasRehearsals: false,
        onClick
      },
      {
        dayName: 'T',
        dayNumber: '16',
        hasRehearsals: false,
        onClick
      },
      {
        dayName: 'W',
        dayNumber: '17',
        hasRehearsals: true,
        onClick
      },
      {
        dayName: 'T',
        dayNumber: '18',
        hasRehearsals: false,
        onClick
      },
      {
        dayName: 'F',
        dayNumber: '20',
        hasRehearsals: false,
        onClick
      },
      {
        dayName: 'S',
        dayNumber: '20',
        hasRehearsals: false,
        onClick
      }
    ]
    const props: WeekViewBarProps = { days, previous, next }
    const tree = renderer.create(
      <WeekViewBar {...props} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with rehearsals on multiple days', () => {
    const days: WeekViewBarItemProps[] = [
      {
        dayName: 'S',
        dayNumber: '14',
        hasRehearsals: true,
        onClick
      },
      {
        dayName: 'M',
        dayNumber: '15',
        hasRehearsals: false,
        onClick
      },
      {
        dayName: 'T',
        dayNumber: '16',
        hasRehearsals: true,
        onClick
      },
      {
        dayName: 'W',
        dayNumber: '17',
        hasRehearsals: true,
        onClick
      },
      {
        dayName: 'T',
        dayNumber: '18',
        hasRehearsals: true,
        onClick
      },
      {
        dayName: 'F',
        dayNumber: '20',
        hasRehearsals: true,
        onClick
      },
      {
        dayName: 'S',
        dayNumber: '20',
        hasRehearsals: true,
        onClick
      }
    ]
    const props: WeekViewBarProps = { days, previous, next }
    const tree = renderer.create(
      <WeekViewBar {...props} />
    )
    expect(tree).toMatchSnapshot()
  })
})