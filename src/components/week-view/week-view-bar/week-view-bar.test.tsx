import * as React from 'react'
import * as renderer from 'react-test-renderer'

import WeekViewBar, { WeekViewBarProps } from './week-view-bar'
import { WeekViewBarItemProps } from './week-view-bar-item'

describe('WeekViewBar', () => {
  it('renders correctly with no rehearsals', () => {
    const days: WeekViewBarItemProps[] = [
      {
        dayName: 'S',
        dayNumber: '14',
        hasRehearsals: false
      },
      {
        dayName: 'M',
        dayNumber: '15',
        hasRehearsals: false
      },
      {
        dayName: 'T',
        dayNumber: '16',
        hasRehearsals: false
      },
      {
        dayName: 'W',
        dayNumber: '17',
        hasRehearsals: false
      },
      {
        dayName: 'T',
        dayNumber: '18',
        hasRehearsals: false
      },
      {
        dayName: 'F',
        dayNumber: '20',
        hasRehearsals: false
      },
      {
        dayName: 'S',
        dayNumber: '20',
        hasRehearsals: false
      }
    ]
    const props: WeekViewBarProps = { days }
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
        hasRehearsals: false
      },
      {
        dayName: 'M',
        dayNumber: '15',
        hasRehearsals: false
      },
      {
        dayName: 'T',
        dayNumber: '16',
        hasRehearsals: false
      },
      {
        dayName: 'W',
        dayNumber: '17',
        hasRehearsals: true
      },
      {
        dayName: 'T',
        dayNumber: '18',
        hasRehearsals: false
      },
      {
        dayName: 'F',
        dayNumber: '20',
        hasRehearsals: false
      },
      {
        dayName: 'S',
        dayNumber: '20',
        hasRehearsals: false
      }
    ]
    const props: WeekViewBarProps = { days }
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
        hasRehearsals: true
      },
      {
        dayName: 'M',
        dayNumber: '15',
        hasRehearsals: true
      },
      {
        dayName: 'T',
        dayNumber: '16',
        hasRehearsals: true
      },
      {
        dayName: 'W',
        dayNumber: '17',
        hasRehearsals: true
      },
      {
        dayName: 'T',
        dayNumber: '18',
        hasRehearsals: true
      },
      {
        dayName: 'F',
        dayNumber: '20',
        hasRehearsals: true
      },
      {
        dayName: 'S',
        dayNumber: '20',
        hasRehearsals: true
      }
    ]
    const props: WeekViewBarProps = { days }
    const tree = renderer.create(
      <WeekViewBar {...props} />
    )
    expect(tree).toMatchSnapshot()
  })
})