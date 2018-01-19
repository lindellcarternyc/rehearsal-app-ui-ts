import * as React from 'react'

import { List, Icon } from 'semantic-ui-react'

import RehearsalModel from '../../models/rehearsal-model'

interface RehearsalIconProps {
  rehearsals: boolean
}
const RehearsalIcon = (props: RehearsalIconProps): JSX.Element => {
  const color = props.rehearsals ? 'blue' : 'grey'
  return (
    <Icon name='circle' size='tiny' color={color}/>
  )
}

interface WeekViewMenuBarItemProps {
  day: {
    date: string,
    rehearsals?: RehearsalModel[]
  }
}
const WeekViewMenuBarItem = (props: WeekViewMenuBarItemProps): JSX.Element => {
  const { date, rehearsals } = props.day
  const dayLetter = date.charAt(0)
  const comps = date.split(' ')
  const dayNumber = comps[comps.length - 1]
  return (
    <List>
      <List.Item>
        <List.Description content={dayLetter} />
        <List.Header as='h3' content={dayNumber} />
        <RehearsalIcon 
          rehearsals={
            rehearsals !== undefined && rehearsals.length > 0
          }
        />
        </List.Item>
    </List>
  )
}

export default WeekViewMenuBarItem