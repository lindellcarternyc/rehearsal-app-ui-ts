import * as React from 'react'

import { List } from 'semantic-ui-react'

import WeekViewRehearsalListItem from './week-view-rehearsal-list-item'
import RehearsalModel from '../../../models/rehearsal-model'

export interface WeekViewRehearsalListProps {
  rehearsals: RehearsalModel[]
}

const WeekViewRehearsalList = (props: WeekViewRehearsalListProps): JSX.Element | null => {
  if (props.rehearsals.length === 0) {
    return null
  }
  const items = props.rehearsals.map(rehearsal => {
    const { time,  } = rehearsal
    return (
      <WeekViewRehearsalListItem key={time} time={time} />
    )
  })
  return (
    <List bulleted items={items} />
  )
}

export default WeekViewRehearsalList