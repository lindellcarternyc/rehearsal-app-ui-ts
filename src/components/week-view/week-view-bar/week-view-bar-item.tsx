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
  const icon = props.hasRehearsals ? 
    (
      <Icon name='circle' size='tiny' color='blue' />
    ) : 
    (
      <Icon name='circle' size='tiny' color='grey' inverted />
    )
  return (
    <List.Description content={icon} />
  )
}

const WeekViewBarItem = (props: WeekViewBarItemProps): JSX.Element => {
  const click = props.hasRehearsals ? props.onClick : undefined
  return (
    <MenuItem onClick={click}>
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