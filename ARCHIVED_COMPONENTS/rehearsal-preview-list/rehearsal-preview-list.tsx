import * as React from 'react'

import Week from '../../models/week'
import RehearsalPreviewModel from '../../models/rehersal-preview-model'

import { List } from 'semantic-ui-react'
import RehearsalPreviewListItem from '../rehearsal-preview-list-item/rehearsal-preview-list-item'

export interface RehearsalPreviewListProps {
  week: Week
  rehearsals: RehearsalPreviewModel[]
}

const Items = (rehearsals: RehearsalPreviewModel[]): JSX.Element[] => {
  return rehearsals.map(rehearsal => {
    const startTime = rehearsal.startTime.format('HH:mm')
    const endTime = rehearsal.endTime.format('HH:mm')
    return (
      <RehearsalPreviewListItem
        key={startTime}
        startTime={startTime}
        endTime={endTime}
      />
    )
  })
}

const createContent = (rehearsals: RehearsalPreviewModel[]): JSX.Element | string => {
  if (rehearsals.length === 0) {
    return 'No Rehearsals'
  } else {
    return (
      <List bulleted>
        {Items(rehearsals)}
      </List>
    )
  }
}

const days = (week: Week, rehearsals: RehearsalPreviewModel[] = []): JSX.Element[] => {
  return week.days.map(day => {
    const dayRehearsalList = rehearsals.filter(r => r.day.date === day.date)
    const content = createContent(dayRehearsalList)
    return (
      <List.Item key={day.date}>
        <List.Header>
          {day.moment.format('ddd, MMMM D')}
        </List.Header>
        {content}
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