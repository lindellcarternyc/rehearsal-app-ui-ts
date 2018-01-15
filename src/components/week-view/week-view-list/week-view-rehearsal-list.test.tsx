import * as React from 'react'
import * as renderer from 'react-test-renderer'
import WeekViewRehearsalList from './week-view-rehearsal-list'

describe('WeekViewRehearsalList', () => {
  it('renders a list of one rehearsal', () => {
    const times = ['12:00 - 16:00']
    const tree = renderer.create(
      <WeekViewRehearsalList times={times} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders a list of multiple rehearsals', () => {
    const times = ['12:00 - 14:30', '14:30 - 16:00']
    const tree = renderer.create(
      <WeekViewRehearsalList times={times} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders nothing if there are no rehearsals', () => {
    const tree = renderer.create(
      <WeekViewRehearsalList times={[]} />
    )
    expect(tree).toMatchSnapshot()
  })
})