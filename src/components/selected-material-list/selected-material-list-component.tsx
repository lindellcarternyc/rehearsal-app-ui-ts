import * as React from 'react'
import { List, Header, Icon } from 'semantic-ui-react'

interface SelectedMaterialListComponentProps {
  material: string[]
  removeMaterial?: (id: number) => void
}

const SelectedMaterialListComponent = (props: SelectedMaterialListComponentProps) => {
  const items = props.material.map((item, idx) => {
    
    if (props.removeMaterial !== undefined) {
      const { removeMaterial } = props
      return (
        <List.Item key={item}>
          {item} <Icon name='cancel' onClick={() => {removeMaterial(idx)}} />
        </List.Item>
      )
    } else {
      return (
        <List.Item key={item} content={item} />
      )
    }
  })
  return (
    <div style={{marginBottom: '1rem'}}>
      <Header as='h4' content='Material' />
      <List bulleted>
        {items}
      </List>
    </div>
  )
}

export default SelectedMaterialListComponent