import * as React from 'react'
import { List } from 'semantic-ui-react'

import CharacterModel from '../../../models/character-model'
import CharacterListItem from './character-list-item'

const CharacterList = (props: {characters: CharacterModel[]}): JSX.Element  => {
  const items = props.characters.map(character => {
    return (
      <CharacterListItem key={character.name} character={character} />
    )
  })
  return (
    <List style={{marginLeft: '2rem'}}>
      {items}
    </List>
    
  )
}

export default CharacterList