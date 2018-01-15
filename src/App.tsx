import * as React from 'react'
import './App.css'
import WeekViewComponent  from './components/week-view/week-view-component'
import DayViewComponent, { DayViewComponentProps } from './components/day-view/day-view-component'
import RehearsalViewComponent from './components/rehearsal-view/rehearsal-view-component'

interface Props {

}

interface State {
  week: number
  day: boolean
  currentDay: DayViewComponentProps | null
  rehearsal: boolean
  currentRehearsal: {
    date: string
    time: string
  } | null
}

import WEEKS from './mocks/data/weeks'

class App extends React.Component<Props, State> {
  constructor() {
    super({})
    this.state = {
      week: 0,
      day: false,
      currentDay: null,
      rehearsal: false,
      currentRehearsal: null
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

  dismissDay = () => {
    this.setState({day: false, currentDay: null})
  }

  selectDay = (dayNum: number) => {
    if (dayNum >= 0 && dayNum <= 6) {
      const week = WEEKS[this.state.week]
      const day = week.days[dayNum]
      const currentDay = {
        date: day.date,
        times: day.times!,
        onClick: this.dismissDay,
        selectRehearsal: this.selectRehearsal
      }
      this.setState({day: true, currentDay})
    }
  }

  selectRehearsal = (date: string, time: string) => {
    const currentRehearsal = {date, time}
    this.setState({rehearsal: true, currentRehearsal})
  }

  dismissRehearsal = () => {
    const currentRehearsal = null
    const rehearsal = false
    this.setState({rehearsal, currentRehearsal})
  }
  
  render() {
    if (this.state.rehearsal) {
      return (
        <RehearsalViewComponent 
          {...this.state.currentRehearsal!} 
          dismissRehearsal={this.dismissRehearsal}
        />
      )
    } else if (this.state.day) {
      return (
        <DayViewComponent {...this.state.currentDay!}/>
      )
    }
    const week = WEEKS[this.state.week]
    const days = week.days
    return (
      <WeekViewComponent 
        days={days}
        previous={this.previous}
        next={this.next}
        clickDay={this.selectDay}
      />
    )
  }
}

export default App
