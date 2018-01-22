import * as React from 'react'
import { List } from 'semantic-ui-react'

import RehearsalModel from '../../models/rehearsal-model'

interface WeekViewDayListItemContent {
  rehearsals: RehearsalModel[] | undefined
}

const RehearsalTime = (props: {time: string}): JSX.Element => {
  return (
    <List.Item content={props.time} />
  )
}

const WeekViewDayListItemContent = (props: WeekViewDayListItemContent) => {
  if (props.rehearsals !== undefined && props.rehearsals.length > 0) {
    const rehearsalTimes = props.rehearsals.map(rehearsal => {
      return (
        <RehearsalTime key={rehearsal.time} time={rehearsal.time} />
      )
    })
    return (
      <List bulleted>
        {rehearsalTimes}
      </List>
    )
  }
  return (
    <p style={{paddingLeft: '1rem'}}>No Rehearsals Today</p>
  )
}

export default WeekViewDayListItemContent