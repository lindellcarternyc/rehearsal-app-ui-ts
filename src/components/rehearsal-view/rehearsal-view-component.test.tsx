import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as renderer from 'react-test-renderer'

import RehearsalView, { RehearsalViewProps } from './rehearsal-view-component'

const dismissRehearsal = jest.fn()

describe('RehearsalView', () => {
  it('renders without crashing', () => {
    const props: RehearsalViewProps = {
      date: 'Tue, January 16',
      rehearsal: {
        time: '19:00 - 22:00',
        material: ['']
      },
      dismissRehearsal
    }
    const div = document.createElement('div')
    ReactDOM.render(
      <RehearsalView {...props} />,
      div
    )
  })

  it('renders a date and time', () => {
    const props: RehearsalViewProps = {
      date: 'Tue, January 16',
      rehearsal: {
        time: '19:00 - 22:00',
        material: ['']
      },
      dismissRehearsal
    }
    const tree = renderer.create(
      <RehearsalView {...props} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})