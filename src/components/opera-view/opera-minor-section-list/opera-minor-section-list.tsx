import * as React from 'react'
import { List } from 'semantic-ui-react'

import { OperaMinorSection } from '../../../models/opera-model'
import OperaMinorSectionListItem from './opera-minor-section-list-item'

const OperaMinorSectionList = (props: {minorSections: OperaMinorSection[]}): JSX.Element => {
  const minorSections = props.minorSections.map((minorSection, idx) => {
    return <OperaMinorSectionListItem key={idx} {...minorSection} />
  })
  return (
    <List divided>
      {minorSections}
    </List>
  )
}

export default OperaMinorSectionList