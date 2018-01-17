import * as React from 'react'
import { List } from 'semantic-ui-react'

import Character from '../../../models/character'
import CharacterListItem from './character-list-item'

const CharacterList = (props: {characters: Character[]}): JSX.Element  => {
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