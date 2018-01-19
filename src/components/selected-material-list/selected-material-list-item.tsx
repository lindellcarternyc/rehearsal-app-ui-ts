import * as React from 'react'

// External Components
import { ListItem, Icon } from 'semantic-ui-react'

export interface SelectedMaterialListItemProps {
  material: string
  id: number
  callback?: (id: number) => void
}

const SelectedMaterialListItem = (props: SelectedMaterialListItemProps): JSX.Element => {
  const { material, callback, id } = props
  if (callback) {
    return (
      <ListItem key={material}>
        {material} <Icon name='cancel' onClick={() => callback(id)} />
      </ListItem>)
  } else {
    return (
      <ListItem content={material} />
    )
  }
}

export default SelectedMaterialListItem