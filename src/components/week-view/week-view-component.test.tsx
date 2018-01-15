import * as React from 'react'
import * as renderer from 'react-test-renderer'
import WeekViewComponent, { WeekViewComponentProps } from './week-view-component'

describe('WeekViewComponent', () => {
  it('renders a week with rehearsals', () => {
    const props: WeekViewComponentProps = {
      days: [
        {
          date: 'Sun, January 14'
        },
        { 
          date: 'Mon, January 15'
        },
        {
          date: 'Tue, January 16',
          times: ['19:00 - 22:00']
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
          times: [
            '13:00 - 14:30',
            '14:30 - 16:00',
            '16:00 - 18:00'
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
      days
    }
    const tree = renderer.create(
      <WeekViewComponent {...props} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})