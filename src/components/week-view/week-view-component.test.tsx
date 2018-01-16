import * as React from 'react'
import * as renderer from 'react-test-renderer'
import WeekViewComponent, { WeekViewComponentProps } from './week-view-component'

const previous = jest.fn()
const next = jest.fn()
const selectDay = jest.fn()

describe('WeekViewComponent', () => {
  it('renders a week with rehearsals', () => {
    const props: WeekViewComponentProps = {
      selectDay,
      previous,
      next,
      days: [
        {
          date: 'Sun, January 14'
        },
        { 
          date: 'Mon, January 15'
        },
        {
          date: 'Tue, January 16',
          rehearsals: [
            {time: '19:00 - 22:00', material: ''}
          ]
        },
        {
          date: 'Wed, January 17'
        },
        {
          date: 'Thu, January 18'
        },
        {
          date: 'Fri, January 19'
        },
        {
          date: 'Sat, January 20',
          rehearsals: [
            {time: '13:00 - 14:30', material: ''},
            {time: '14:30 - 16:00', material: ''},
            {time: '16:00 - 18:00', material: ''}
          ]
        }
      ]
    }
    const tree = renderer.create(
      <WeekViewComponent {...props} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with no rehearsals', () => {
    const days = [
      {
        date: 'Sun, January 14'
      },
      { 
        date: 'Mon, January 15'
      },
      {
        date: 'Tue, January 16'
      },
      {
        date: 'Wed, January 17'
      },
      {
        date: 'Thu, January 18'
      },
      {
        date: 'Fri, January 19'
      },
      {
        date: 'Sat, January 20'
      }
    ]
    const props: WeekViewComponentProps = {
      selectDay,
      previous,
      next,
      days
    }
    const tree = renderer.create(
      <WeekViewComponent {...props} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})