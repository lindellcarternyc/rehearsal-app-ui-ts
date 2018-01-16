import * as React from 'react'
import { MenuItem, List, Icon
} from 'semantic-ui-react'

export interface WeekViewBarItemProps {
  dayName: string,
  dayNumber: string,
  hasRehearsals: boolean
  onClick: () => void
}

const RehearsalIndicator = (props: {hasRehearsals: boolean}): JSX.Element => {
  const color = props.hasRehearsals ? 'blue' : 'grey'
  const icon = (<Icon name='circle' size='tiny' color={color} />)

  return (
    <List.Description content={icon} />
  )
}

const WeekViewBarItem = (props: WeekViewBarItemProps): JSX.Element => {
  return (
    <MenuItem onClick={props.onClick}>
      <List style={{textAlign: 'center'}}>
        <List.Item>
          <List.Description content={props.dayName} />
          <List.Header as='h3' content={props.dayNumber} />
          <RehearsalIndicator hasRehearsals={props.hasRehearsals} />
        </List.Item>
      </List>
    </MenuItem>
  )
}

export default WeekViewBarItem