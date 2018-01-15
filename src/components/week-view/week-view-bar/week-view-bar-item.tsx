import * as React from 'react'
import { MenuItem, Header, HeaderSubheader, Icon } from 'semantic-ui-react'

export interface WeekViewBarItemProps {
  dayName: string,
  dayNumber: string,
  hasRehearsals: boolean
}

const WeekViewBarItem = (props: WeekViewBarItemProps): JSX.Element => {
  return (
    <MenuItem>
      <Header as='h3' align='center'>
        <HeaderSubheader content={props.dayName} />
        {props.dayNumber}
      </Header>
      {props.hasRehearsals && 
        <div><Icon name='circle' size='tiny'/></div>
      }
    </MenuItem>
  )
}

export default WeekViewBarItem