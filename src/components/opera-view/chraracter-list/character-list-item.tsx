import * as React from 'react'
import { ListItem } from 'semantic-ui-react'

import Character from '../../../models/character'

const CharacterListItem = (props: {character: Character}): JSX.Element => {
  return (
    <ListItem content={props.character.name} />
  )
}

export default CharacterListItem