import * as React from 'react'
import { ListItem } from 'semantic-ui-react'

import CharacterModel from '../../../models/character-model'

const CharacterListItem = (props: {character: CharacterModel}): JSX.Element => {
  return (
    <ListItem content={props.character.name} />
  )
}

export default CharacterListItem