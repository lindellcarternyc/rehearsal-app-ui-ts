import * as React from 'react'

import { Container, Header } from 'semantic-ui-react'

const ContainerStyles = {
  marginTop: '3.5rem'
}

import OperaModel from '../../models/opera-model'

import OperaMajorSection from './opera-major-section'

interface Props {
  opera: OperaModel
}

const OperaViewComponent = (props: Props): JSX.Element => {
  const { opera } = props
  const majorSections = opera.majorSections.map((majorSection, idx) => {
    return (
      <OperaMajorSection 
        key={idx}
        title={majorSection.title}
        minorSections={majorSection.minorSections}
      />
    )
  })
  return (
    <Container text style={ContainerStyles}>
      <Header as='h2' content={opera.title} />
      {majorSections}
    </Container>
  )
}

export default OperaViewComponent