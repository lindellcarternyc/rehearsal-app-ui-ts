import * as React from 'react'

import { Dropdown } from 'semantic-ui-react'

import { OperaMajorSection, OperaMinorSection } from '../../models/opera-model'

interface AddMinorSectionDropdownProps {
  majorSection: OperaMajorSection
  selectedMaterial: string[]
  didSelect: (title: string) => void
}

interface Option {
  text: string
  value: string
  key: string
}

class AddMinorSectionDropdown extends React.Component<AddMinorSectionDropdownProps, {}> {
  getDefaultOption = (): Option => {
    const { majorSection } = this.props
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

  filterOptions = (): Option[] => {
    let options: Option[] = []

    const { majorSection, selectedMaterial } = this.props
    const { minorSections } = majorSection

    const isDefaultSelected = selectedMaterial.filter(item => {
      return item === 'Run ' + majorSection.title
    }).length > 0
    if (!isDefaultSelected) {
      options.push(this.getDefaultOption())
    }
    const availableMinorSections = minorSections.filter(minorSection => {
      return selectedMaterial.filter(item  => {
        return item === majorSection.title + ': ' + minorSection.title
      }).length === 0
    })
    availableMinorSections.forEach(minorSection => {
      options.push(this.getMinorSectionOption(minorSection))
    })
    return options
  }
  
  render() {
    const options = this.filterOptions()
    if (options.length > 0) {
      return (
        <Dropdown options={options} selection onChange={this.handleChange}/>
      )
    }
    return null
  }
}

export default AddMinorSectionDropdown