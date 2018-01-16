import * as React from 'react'

import { Container, Header, Form, Button } from 'semantic-ui-react'

interface AddRehearsalComponentProps {
  date: string
  dismiss: () => void
  addRehearsal: (time: string, material: string) => void
}

interface AddRehearsalComponentState {
  startTime: string
  endTime: string
  material: string
}

class AddRehearsalComponent extends React.Component<AddRehearsalComponentProps, AddRehearsalComponentState> {
  state = {
    startTime: '',
    endTime: '',
    material: ''
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
        this.setState({material: value})
        break

      default:
        return
    }
  }

  onSubmit = () => {
    const { startTime, endTime, material } = this.state
    const time = startTime + ' - ' + endTime
    this.props.addRehearsal(time, material)
  }

  render() {
    return (
      <Container>
        <Header as='h2' content={'Add Rehearsal: ' + this.props.date} />
        <Form onSubmit={this.onSubmit}>
          <Form.Input
            id='startTime'
            label='Start time' 
            type='time' 
            required 
            onChange={this.onChange}
          />
          <Form.Input 
            label='End time' 
            id='endTime'
            type='time' 
            onChange={this.onChange}
            required 
          />
          <Form.Input 
            label='Material'
            id='material' 
            onChange={this.onChange}
            required
          />
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
        <p>{JSON.stringify(this.state, null, 2)}</p>
      </Container>
    )
  }
}

export default AddRehearsalComponent