import * as React from 'react'

import Week from '../../models/week'
import RehearsalPreviewModel from '../../models/rehersal-preview-model'

import { List } from 'semantic-ui-react'

export interface RehearsalPreviewListProps {
  week: Week
  rehearsals: RehearsalPreviewModel[]
}

const days = (week: Week, rehearsals: RehearsalPreviewModel[] = []): JSX.Element[] => {
  return week.days.map(day => {
    // const dayRehearsals = rehearsals.filter(rehearsal => {
    //   return rehearsal.day.date === day.date
    // }).map(rehearsal => {
    //   return rehearsal.day.name
    // })
    const numRehearsals = rehearsals.filter(rehearsal => {
      return rehearsal.day.date === day.date
    }).length
    return (
      <List.Item key={day.date}>
        <List.Header>
          {day.moment.format('ddd, MMMM D')}
        </List.Header>
        {/* TOO
          MOCK Rehearsal schedules
        */}
        {numRehearsals === 0 && 
          'No Rehearsal'
        }
        {numRehearsals === 1 &&
          '1 rehearsal'
        }
        {numRehearsals > 1 &&
          `${numRehearsals} rehearsals`
        }
      </List.Item>
    )
  })
}

const RehearsalPreviewList = (props: RehearsalPreviewListProps): JSX.Element => {
  const { week, rehearsals } = props
  return (
    <List celled relaxed>
      {days(week, rehearsals)}
    </List>
  )
}

export default RehearsalPreviewList