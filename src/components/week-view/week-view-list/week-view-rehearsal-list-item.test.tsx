import * as React from 'react'
import * as renderer from 'react-test-renderer'

import WeekViewRehearsalListItem from './week-view-rehearsal-list-item'

describe('WeekViewRehearsalListItem', () => {
  it('should correctly render the rehearsal time', () => {
    const time = '12:00 - 16:00'
    const tree = renderer.create(
      <WeekViewRehearsalListItem time={time} />
    )
    expect(tree).toMatchSnapshot()
  })
})