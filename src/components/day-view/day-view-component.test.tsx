import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as renderer from 'react-test-renderer'

import DayViewComponent, { DayViewComponentProps } from './day-view-component'
const onClick = jest.fn()

describe('DayViewComponent', () => {
  it('renders without crashing', () => {
    const props: DayViewComponentProps = {
      date: 'Sat, January 20',
      times: [
        '13:00 - 14:30',
        '14:30 - 16:00',
        '16:00 - 18:00'
      ]
    }
    const div = document.createElement('div')
    ReactDOM.render(
      <DayViewComponent {...props} />,
      div
    )
  })

  it('renders a day with many rehearsals', () => {
    const props: DayViewComponentProps = {
      date: 'Sat, January 20',
      times: [
        '13:00 - 14:30',
        '14:30 - 16:00',
        '16:00 - 18:00'
      ],
      onClick
    }

    const tree = renderer.create(
      <DayViewComponent {...props} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders a day with one rehearsal', () => {
    const props: DayViewComponentProps = {
      date: 'Tue, January 15',
      times: ['19:00 - 22:00'],
      onClick
    }
    const tree = renderer.create(
      <DayViewComponent {...props} />
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})