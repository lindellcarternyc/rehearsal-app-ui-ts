import * as React from 'react'

import { 
  Container, Header, Form, Button,
} from 'semantic-ui-react'

import RehearsalModel from '../../models/rehearsal-model'
import OperaModel from '../../models/opera-model'

// import AddMinorSectionDropdown from './add-minor-section-dropdown'
import AddMaterialDropdown from './add-material-dropdown'
import MaterialListComponent from '../material-list/material-list-component'

interface AddRehearsalComponentProps {
  date: string
  dismiss: () => void
  addRehearsal: (rehearsal: RehearsalModel) => void
  opera: OperaModel
}

interface AddRehearsalComponentState {
  startTime: string
  endTime: string
  material: string[]
  majorSectionID: number | null
}

class AddRehearsalComponent extends React.Component<AddRehearsalComponentProps, AddRehearsalComponentState> {
  state = {
    startTime: '',
    endTime: '',
    material: [],
    majorSectionID: null
  }

  onChange = (evt: React.SyntheticEvent<HTMLInputElement>) => {
    const { id, value } = evt.currentTarget
    switch (id) {
      case 'startTime':
        this.setState({startTime: value})
        break

      case 'endTime':
        this.setState({endTime: value})
        break

      default:
        return
    }
  }

  onChangeMajorSection = (evt: React.SyntheticEvent<HTMLInputElement>) => {
    const title = evt.currentTarget.innerText
    const majorSectionID = this.props.opera.majorSections.findIndex(section => {
      return section.title === title
    })
    if (majorSectionID >= 0) {
      this.setState({majorSectionID})
    }
  }

  onSubmit = () => {
    const { startTime, endTime, material } = this.state
    const time = startTime + ' - ' + endTime
    this.props.addRehearsal({time, material})
  }

  majorSectionOptions = () => {
    return this.props.opera.majorSections.map((majorSection, idx) => {
      return {
        text: majorSection.title,
        value: idx,
        key: majorSection.title
      }
    })
  }

  minorSectionOptions = (id: number) => {
    const majorSection = this.props.opera.majorSections[id]

    return majorSection.minorSections.map(minorSection => {
      return {
        text: minorSection.title,
        key: minorSection.title,
        value: minorSection.title
      }
    })
  }

  addMaterial = (title: string) => {
    const material = [...this.state.material, title]
    this.setState({material})
  }

  removeMaterial = (id: number) => {
    const material = this.state.material
    material.splice(id, 1)
    this.setState({material})
  } 

  render() {
    const { opera } = this.props

    return (
      <Container>
        <Header as='h2' content={'Add Rehearsal: ' + this.props.date} />
        <Form onSubmit={this.onSubmit}>
          <Form.Group widths='equal'>
            <Form.Field>
              <Form.Input
                id='startTime'
                label='Start time' 
                type='time' 
                required
                fluid 
                onChange={this.onChange}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                label='End time' 
                id='endTime'
                type='time' 
                onChange={this.onChange}
                fluid
                required 
              />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <AddMaterialDropdown 
              opera={opera} 
              addMaterial={this.addMaterial}
              selectedMaterial={this.state.material}
            />
          </Form.Field>
          {this.state.material.length > 0 &&
            <MaterialListComponent 
              material={this.state.material}
              removeMaterial={this.removeMaterial}
            />
          }
          <Button 
            type='submit' 
            content='Add Rehearsal'
            color='blue'
          />
          <Button 
            type='cancel'
            content='Cancel'
            onClick={this.props.dismiss}
          />
        </Form>
      </Container>
    )
  }
}

export default AddRehearsalComponent