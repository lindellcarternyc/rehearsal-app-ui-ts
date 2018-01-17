import * as React from 'react'
import { 
  // ListItem, ListContent, ListHeader, ListDescription, 
Accordion, Header
} from 'semantic-ui-react'

import { OperaMinorSection } from '../../../models/opera-model'
import CharacterList from '../chraracter-list/character-list'

const OperaMinorSectionListItem = (props: OperaMinorSection): JSX.Element => {
  const { start, end, characters } = props
  const panels = [
    {
      title: 'Characters',
      content: {
        content: (
          <CharacterList characters={characters} />
        )
      }
    }
  ]
  return (
    <div style={{marginLeft: '1rem'}}>
      <Header as='h5' content={`${start} to ${end}`} />
      <Accordion panels={panels} />
    </div>
  )
}

export default OperaMinorSectionListItem