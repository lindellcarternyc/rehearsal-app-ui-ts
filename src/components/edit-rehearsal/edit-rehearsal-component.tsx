import * as React from 'react'

import { Container, Header, Form, Button } from 'semantic-ui-react'

import RehearsalModel from '../../models/rehearsal-model'

interface EditRehearsalComponentProps {
  date: string
  rehearsal: RehearsalModel
  rehearsalNum: number
  dismiss: () => void
  editRehearsal: (rehearsalNum: number, rehearsal: RehearsalModel) => void
}
interface EditRehearsalComponentState { 
  startTime: string
  endTime: string
  material: string[]
}

class EditRehearsalComponent extends React.Component<EditRehearsalComponentProps, EditRehearsalComponentState> {
  constructor(props: EditRehearsalComponentProps) {
    super(props)

    // const date = props.date
    const { time, material } = props.rehearsal
    const [startTime, endTime] = time.split(' - ')

    this.state = {
      startTime,
      endTime,
      material
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
      case 'material':
        this.setState({material: [value]})
        break
      default:
        return
    }
  }

  handleSubmit = () => {
    const rehearsalNum = this.props.rehearsalNum
    const { startTime, endTime, material } = this.state
    const time = startTime + ' - ' + endTime
    this.props.editRehearsal(rehearsalNum, {time, material})
  }
  
  render() {
    const { date } = this.props
    const { startTime, endTime, material } = this.state

    return (
      <Container>
        <Header as='h2' content={date} />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Field>
              <Form.Input 
                id='startTime'
                label='Start time'
                fluid
                required
                type='time'
                value={startTime}
                onChange={this.onChange}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input 
                id='endTime'
                label='End time'
                fluid
                required
                type='time'
                value={endTime}
                onChange={this.onChange}
              />
            </Form.Field>
          </Form.Group>
          <Form.Input 
            id='material'
            label='Material'
            required
            value={material}
            onChange={this.onChange}
          />
          <Button 
            content='Edit rehearsal'
            type='submit'
            color='blue'
            onClick={this.handleSubmit}
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

export default EditRehearsalComponent