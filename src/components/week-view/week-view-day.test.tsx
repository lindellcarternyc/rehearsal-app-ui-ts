import * as React from 'react'
import * as renderer from 'react-test-renderer'
import WeekViewDay, { WeekViewDayProps } from './week-view-day'

describe('WeekViewDay', () => {
  it('renders correctly if there are no rehearsals', () => {
    const props: WeekViewDayProps = {
      date: 'Sun, January 14'
    }
    const tree = renderer.create(
      <WeekViewDay {...props} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with one rehearsal', () => {
    const props: WeekViewDayProps = {
      date: 'Tue, January 16',
      times: ['19:00 - 22:00']
    }
    const tree = renderer.create(
      <WeekViewDay {...props} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with two rehearsals', () => {
    const props: WeekViewDayProps = {
      date: 'Sat, January 20',
      times: ['13:00 - 14:30', '14:30 - 16:00']
    }
    const tree = renderer.create(
      <WeekViewDay {...props} />
    )
    expect(tree).toMatchSnapshot()
  })
})