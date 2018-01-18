import * as React from 'react'

import { Dropdown, Form, Button, 
 } from 'semantic-ui-react'
import AddMinorSectionDropdown from './add-minor-section-dropdown'

import OperaModel, { OperaMajorSection } from '../../models/opera-model'

interface AddMaterialDropdownComponentProps {
  opera: OperaModel
  addMaterial: (title: string) => void
  selectedMaterial: string[]
}
interface Option {
  text: string
  key: string
  value: string
}
interface AddMaterialDropdownComponentState {
  majorSectionTitle: string | undefined
  minorSectionTitle: string | undefined
}

class AddMaterialDropdownComponent extends React.Component<
  AddMaterialDropdownComponentProps, AddMaterialDropdownComponentState
> {
  state = {
    majorSectionTitle: undefined,
    minorSectionTitle: undefined
  }
  
  handleChange = (_: React.SyntheticEvent<HTMLInputElement>, data: {value: string}) => {
    const majorSectionTitle = data.value
    const minorSectionTitle = undefined
    this.setState({majorSectionTitle, minorSectionTitle})
  }

  selectMinorSection = (title: string) => {
    this.setState({minorSectionTitle: title})
  }
  
  getOptionForMajorSection = (majorSection: OperaMajorSection): Option => {
    const { title } = majorSection
    return {
      text: title,
      key: title,
      value: title
    }
  }

  getOptionsForMajorSections = (): Option[] => {
    const { majorSections } = this.props.opera
    return majorSections.map(section => this.getOptionForMajorSection(section))
  }

  renderMinorSectionDropdown = (): JSX.Element | null => {
    if (this.state.majorSectionTitle !== undefined) {
      const title = this.state.majorSectionTitle
      const majorSections = this.props.opera.majorSections
      const filtered = majorSections.filter(s => s.title === title)

      if (filtered.length === 1) {
        return (
          <AddMinorSectionDropdown 
            majorSection={filtered[0]}
            didSelect={this.selectMinorSection}
            selectedMaterial={this.props.selectedMaterial}
          />
        )
      } else {
        return null
      }
    } else {
      return null
    }
  }

  clearMaterialSelection = () => {
    const majorSectionTitle = undefined
    this.setState({majorSectionTitle})
    this.setState(
      {
        majorSectionTitle: undefined,
        minorSectionTitle: undefined
      }
    )
  }

  addMaterialSelection = () => {
    const { majorSectionTitle, minorSectionTitle } = this.state
    if (majorSectionTitle !== undefined && minorSectionTitle !== undefined) {
      let title: string
      if ((minorSectionTitle as string).match(/^Run/) !== null) {
        title = minorSectionTitle
      } else {
        title = majorSectionTitle + ': ' + minorSectionTitle
      }
      this.props.addMaterial(title)
      this.clearMaterialSelection()
    }
  }
  
  render() {
    const options = this.getOptionsForMajorSections()
    return (
      <div>
        <Form.Field>
          <label>Add Material</label>
          <Dropdown  
            selection
            options={options}
            onChange={this.handleChange}
          />
        </Form.Field>
        {this.state.majorSectionTitle !== undefined &&
          <div>
            <Form.Field>
              {this.renderMinorSectionDropdown()}
            </Form.Field>
            <Button 
              content='Add to material' 
              onClick={this.addMaterialSelection}
              type='button'
              color='blue'
              disabled={this.state.minorSectionTitle === undefined}
            />
            <Button 
              content='Clear' 
              onClick={this.clearMaterialSelection}
              type='button'
            />
          </div>
        }
      </div>
    )
  }
}

export default AddMaterialDropdownComponent