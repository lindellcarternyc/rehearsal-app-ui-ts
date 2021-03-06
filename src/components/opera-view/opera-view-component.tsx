import * as React from 'react'

import Page from '../page/page'

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
    <Page title={opera.title}>
      {majorSections}
    </Page>
  )
}

export default OperaViewComponent