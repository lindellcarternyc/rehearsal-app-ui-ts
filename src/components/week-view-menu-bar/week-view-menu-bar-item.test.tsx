import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as Enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

import WeekViewMenuBarItem from './week-view-menu-bar-item'

import WEEKS from '../../mocks/data/weeks'

Enzyme.configure({adapter: new Adapter()})

describe('WeekViewMenuBarItem', () => {
  it('renders with no rehearsals', () => {
    const day = WEEKS[0].days[0]
    const tree = renderer.create(
      <WeekViewMenuBarItem day={day} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders with rehearsals', () => {
    const day = WEEKS[1].days[2]
    const tree = renderer.create(
      <WeekViewMenuBarItem day={day} />
    )
    expect(tree).toMatchSnapshot()
  })
})