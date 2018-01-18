import * as React from 'react'
import { List, Header, Icon } from 'semantic-ui-react'

interface MaterialListComponentProps {
  material: string[]
  removeMaterial: (id: number) => void
}

const MaterialListComponent = (props: MaterialListComponentProps) => {
  const items = props.material.map((item, idx) => {
    const didClick = () => {
      props.removeMaterial(idx)
    }
    return (
      <List.Item key={item}>
        {item} <Icon name='cancel' onClick={didClick} />
      </List.Item>
    )
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

export default MaterialListComponent