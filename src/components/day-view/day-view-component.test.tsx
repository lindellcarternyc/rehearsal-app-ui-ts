import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as renderer from 'react-test-renderer'

import DayViewComponent, { DayViewComponentProps } from './day-view-component'
const onClick = jest.fn()
const selectRehearsal = jest.fn()
const cancelRehearsal = jest.fn()
const showAddRehearsal = jest.fn()
const showEditRehearsal = jest.fn()

describe('DayViewComponent', () => {
  it('renders without crashing', () => {
    const props: DayViewComponentProps = {
      showAddRehearsal,
      cancelRehearsal,
      showEditRehearsal,
      date: 'Sat, January 20',
      rehearsals: [
        {time: '13:00 - 14:30', material: ['']},
        {time: '14:30 - 16:00', material: ['']},
        {time: '16:00 - 18:00', material: ['']}
      ],
      onClick,
      selectRehearsal
    }
    const div = document.createElement('div')
    ReactDOM.render(
      <DayViewComponent {...props} />,
      div
    )
  })

  it('renders a day with many rehearsals', () => {
    const props: DayViewComponentProps = {
      showAddRehearsal,
      cancelRehearsal,
      showEditRehearsal,
      date: 'Sat, January 20',
      rehearsals: [
        {time: '13:00 - 14:30', material: ['']},
        {time: '14:30 - 16:00', material: ['']},
        {time: '16:00 - 18:00', material: ['']}
      ],
      onClick,
      selectRehearsal
    }

    const tree = renderer.create(
      <DayViewComponent {...props} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders a day with one rehearsal', () => {
    const props: DayViewComponentProps = {
      showAddRehearsal,
      cancelRehearsal,
      showEditRehearsal,
      date: 'Tue, January 15',
      rehearsals: [
        {time: '19:00 - 22:00', material: ['']}
      ],
      onClick,
      selectRehearsal
    }
    const tree = renderer.create(
      <DayViewComponent {...props} />
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})