import * as React from 'react'
import * as renderer from 'react-test-renderer'

import WeekViewList, { WeekViewListProps } from './week-view-list'

describe('WeekViewList', () => {
  it('renders a week with no rehearsals', () => {
    const props: WeekViewListProps = {
      days: [
        {
          date: 'Sun, January 7'
        },
        {
          date: 'Mon, January 8'
        },
        {
          date: 'Tue, January 9'
        },
        {
          date: 'Wed, January 10'
        },
        {
          date: 'Thu, January 11'
        },
        {
          date: 'Fri, January 12'
        },
        {
          date: 'Sat, January 13'
        }
      ]
    }

    const tree = renderer.create(
      <WeekViewList {...props} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders a week with rehearsals', () => {
    const props: WeekViewListProps = {
      days: [
        {
          date: 'Sun, January 14'
        },
        {
          date: 'Mon, January 15'
        },
        {
          date: 'Tue, January 16',
          times: [
            '12:00 - 14:00'
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
          times: [
            '13:00 - 14:30',
            '14:30 - 16:00',
            '16:00 - 18:00'
          ]
        }
      ]
    }
    const tree = renderer.create(
      <WeekViewList {...props} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})