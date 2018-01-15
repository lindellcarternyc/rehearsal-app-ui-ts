import * as React from 'react'
import './App.css'
import WeekViewComponent  from './components/week-view/week-view-component'
import DayViewComponent from './components/day-view/day-view-component'

interface Props {

}

interface State {
  week: number
  day: boolean
}

import WEEKS from './mocks/data/weeks'
const Mockday = WEEKS[1].days[6]

class App extends React.Component<Props, State> {
  constructor() {
    super({})
    this.state = {
      week: 0,
      day: true
    }
  }

  next = () => {
    let week = this.state.week
    if (week < WEEKS.length - 1) {
      week += 1
      this.setState({week})
    }
  }

  previous = () => {
    let week = this.state.week
    if (week > 0) {
      week -= 1
      this.setState({week})
    }
  }
  
  render() {
    if (this.state.day) {
      const date = Mockday.date
      const times = Mockday.times!
      return (
        <DayViewComponent date={date} times={times} />
      )
    }
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
