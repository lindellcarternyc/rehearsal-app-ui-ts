import * as React from 'react'

// External components
import { List, Header } from 'semantic-ui-react'

// components
import SelectedMaterialListItem from './selected-material-list-item'

interface SelectedMaterialListComponentProps {
  material: string[]
  removeMaterial?: (id: number) => void
}

const SelectedMaterialListComponent = (props: SelectedMaterialListComponentProps) => {
  return (
    <div style={{marginBottom: '1rem'}}>
      <Header as='h4' content='Material' />
      <List bulleted>
        {props.material.map((item, idx) => {
          return (
            <SelectedMaterialListItem 
              key={item}
              id={idx}
              material={item}
              callback={props.removeMaterial}
            />
          )
        })}
      </List>
    </div>
  )
}

export default SelectedMaterialListComponent