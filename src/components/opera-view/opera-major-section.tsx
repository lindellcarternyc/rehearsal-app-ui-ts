import * as React from 'react'
import { Segment, Header, Accordion } from 'semantic-ui-react'

import { OperaMinorSection } from '../../models/opera-model'
// import OperaMinorSectionList from './opera-minor-section-list/opera-minor-section-list'
// import { A}
import OperaMinorSectionListItem from './opera-minor-section-list/opera-minor-section-list-item'

const OperaMajorSection = (props: {title: string, minorSections: OperaMinorSection[]}): JSX.Element => {
  const panels = props.minorSections.map(minorSection => {
    return {
      title: minorSection.title,
      content: {
        content: (
          <OperaMinorSectionListItem {...minorSection}/>
        )
      }
    }
  })

  return (
    <Segment>
      <Header as='h3' content={props.title} />
      {/* <OperaMinorSectionList minorSections={props.minorSections}/> */}
      <Accordion panels={panels} />
    </Segment>
  )
}

export default OperaMajorSection