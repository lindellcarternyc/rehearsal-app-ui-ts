import * as React from 'react'

import { Dropdown } from 'semantic-ui-react'

import { OperaMajorSection, OperaMinorSection } from '../../models/opera-model'

interface AddMinorSectionDropdownProps {
  majorSection: OperaMajorSection
  didSelect: (title: string) => void
}

interface Option {
  text: string
  value: string
  key: string
}

class AddMinorSectionDropdown extends React.Component<AddMinorSectionDropdownProps, {}> {
  getDefaultOption = (majorSection: OperaMajorSection): Option => {
    const title = 'Run ' + majorSection.title
    return {
      text: title,
      value: title,
      key: title
    }
  }
  
  getMinorSectionOption = (minorSection: OperaMinorSection): Option => {
    const { title } = minorSection
    return {
      text: title,
      value: title,
      key: title
    }
  }

  handleChange = (e: React.SyntheticEvent<HTMLInputElement>, data: { value: string }) => {
    const title = data.value
    this.props.didSelect(title)
  }
  
  render() {
    const { majorSection } = this.props
    const { minorSections } = majorSection
    
    const defaultOption = this.getDefaultOption(majorSection)
    const minorSectionOptions = minorSections.map(minorSection => {
      return this.getMinorSectionOption(minorSection)
    })
    const options = [
      defaultOption,
      ...minorSectionOptions
    ]
    return (
      <Dropdown options={options} selection onChange={this.handleChange}/>
    )
  }
}

export default AddMinorSectionDropdown