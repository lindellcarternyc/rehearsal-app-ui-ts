import * as React from 'react'
import './App.css'
import { WeekViewComponent } from './components/week-view/week-view-component'

interface Props {

}

interface State {
  week: number
}

import WEEKS from './mocks/data/weeks'

class App extends React.Component<Props, State> {
  constructor() {
    super({})
    this.state = {
      week: 0
    }
  }

  next = () => {
    let week = this.state.week + 1
    if (week >= WEEKS.length) {
      week = 0
    }
    this.setState({week})
  }

  previous = () => {
    let week = this.state.week - 1
    if (week < 0) {
      week = WEEKS.length - 1
    }
    this.setState({week})
  }
  
  render() {
    const week = WEEKS[this.state.week]
    const days = week.days
    return (
      <WeekViewComponent 
        days={days}
        previous={this.previous}
        next={this.next}
      />
    )
  }
}

export default App
