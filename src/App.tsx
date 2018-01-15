import * as React from 'react'
import './App.css'
import { WeekViewComponent } from './components/week-view/week-view-component'

interface Props {

}

interface State {
  week: number
}

import WEEK_1 from './mocks/data/week1'
import WEEK_2 from './mocks/data/week2'

class App extends React.Component<Props, State> {
  constructor() {
    super({})
    this.state = {
      week: 1
    }
  }

  next = () => {
    if (this.state.week === 1) {
      this.setState({week: 2})
    }
  }

  previous = () => {
    if (this.state.week === 2) {
      this.setState({week: 1})
    }
  }
  
  render() {
    const week = this.state.week === 1 ? 
      WEEK_1 : WEEK_2
    const days = week.days
    return (
      <WeekViewComponent 
        days={days}
        previous={() => console.dir('p')}
        next={() => {console.dir('n')}}
      />
    )
  }
}

export default App
