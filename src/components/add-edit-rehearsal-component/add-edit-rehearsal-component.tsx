import * as React from 'react'

import { 
  Form, Button,
} from 'semantic-ui-react'

import RehearsalModel from '../../models/rehearsal-model'
import OperaModel from '../../models/opera-model'

import PageComponent from '../page-component/page-component'
import AddMaterialDropdownComponent from '../add-material-dropdown/add-material-dropdown-component'
import SelectedMaterialListComponent from '../selected-material-list/selected-material-list-component'

interface Config {
  mode: 'Add' | 'Edit'
}
export interface AddConfig extends Config {
  mode: 'Add'
  addRehearsal: (rehearsal: RehearsalModel) => void
}
export interface EditConfig extends Config {
  mode: 'Edit'
  rehearsal: RehearsalModel
  rehearsalNum: number
  editRehearsal: (rehearsalNum: number, rehearsal: RehearsalModel) => void
}

interface Props {
  opera: OperaModel
  date: string
  dismiss: () => void
  config: AddConfig | EditConfig
}

interface AddRehearsalComponentState {
  startTime: string
  endTime: string
  material: string[]
  majorSectionID: number | null
}

class AddRehearsalComponent extends React.Component<Props, AddRehearsalComponentState> {
  constructor(props: Props) {
    super(props)

    const { config } = props
    if (config.mode === 'Edit') {
      const { rehearsal } = config
      const { material, time } = rehearsal
      const [startTime, endTime] = time.split(' - ')
      this.state = {
        startTime,
        endTime,
        material,
        majorSectionID: null
      }
    } else {
      this.state = {
        startTime: '',
        endTime: '',
        material: [],
        majorSectionID: null
      }
    }
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

  formatTime = (): string => {
    const { startTime, endTime } = this.state
    return startTime + ' - ' + endTime
  }
  submitEdit = () => {
    const config = this.props.config as EditConfig
    const { rehearsalNum, editRehearsal } = config
    const { material } = this.state
    const time = this.formatTime()
    editRehearsal(rehearsalNum, {time, material})
  }

  submitAdd = () => {
    const config = this.props.config as AddConfig
    const time = this.formatTime()
    const { material } = this.state
    config.addRehearsal({time, material})
  }

  onSubmit = () => {
    const { config } = this.props
    if (config.mode === 'Add') {
      this.submitAdd()
    } else {
      this.submitEdit()
    }
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
    const { opera, config, date } = this.props
    const title = config.mode + ' Rehearsal: ' + date

    return (
      <PageComponent 
        title={title}
        content={(
          <Form onSubmit={this.onSubmit}>
          <Form.Group widths='equal'>
            <Form.Field>
              <Form.Input
                value={this.state.startTime}
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
                value={this.state.endTime}
                onChange={this.onChange}
                fluid
                required 
              />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <AddMaterialDropdownComponent 
              opera={opera} 
              addMaterial={this.addMaterial}
              selectedMaterial={this.state.material}
            />
          </Form.Field>
          {this.state.material.length > 0 &&
            <SelectedMaterialListComponent 
              material={this.state.material}
              removeMaterial={this.removeMaterial}
            />
          }
          <Button 
            type='submit' 
            content={config.mode + ' Rehearsal'}
            color='blue'
            onClick={this.onSubmit}
          />
          <Button 
            type='cancel'
            content='Cancel'
            onClick={this.props.dismiss}
          />
        </Form>
        )}
      />
    )
  }
}

export default AddRehearsalComponent