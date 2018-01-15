import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as renderer from 'react-test-renderer'

import RehearsalViewComponent, { RehearsalViewComponentProps } from './rehearsal-view-component'

describe('RehearsalViewComponent', () => {
  it('renders without crashing', () => {
    const props: RehearsalViewComponentProps = {
      date: 'Tue, January 16',
      time: '19:00 - 22:00'
    }
    const div = document.createElement('div')
    ReactDOM.render(
      <RehearsalViewComponent {...props} />,
      div
    )
  })

  it('renders a date and time', () => {
    const props: RehearsalViewComponentProps = {
      date: 'Tue, January 16',
      time: '19:00 - 22:00'
    }
    const tree = renderer.create(
      <RehearsalViewComponent {...props} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})