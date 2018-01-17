import * as React from 'react'
import * as renderer from 'react-test-renderer'
import WeekViewRehearsalList from './week-view-rehearsal-list'

describe('WeekViewRehearsalList', () => {
  it('renders a list of one rehearsal', () => {
    const rehearsals = [
      {time: '12:00 - 16:00', material: ['']}
    ]
    const tree = renderer.create(
      <WeekViewRehearsalList rehearsals={rehearsals} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders a list of multiple rehearsals', () => {
    const rehearsals = [
      {time: '12:00 - 14:30', material: ['']},
      {time: '14:30 - 16:00', material: ['']}
    ]
    const tree = renderer.create(
      <WeekViewRehearsalList rehearsals={rehearsals} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders nothing if there are no rehearsals', () => {
    const tree = renderer.create(
      <WeekViewRehearsalList rehearsals={[]} />
    )
    expect(tree).toMatchSnapshot()
  })
})