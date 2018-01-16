import * as React from 'react'
import './App.css'
import WeekViewComponent, { WeekViewComponentData, }  from './components/week-view/week-view-component'
import DayViewComponent, { DayViewComponentProps } from './components/day-view/day-view-component'
import RehearsalViewComponent from './components/rehearsal-view/rehearsal-view-component'
import AddRehearsalComponent from './components/add-rehearsal/add-rehearsal-component'

interface Props {

}

interface State {
  week: number
  weeks: WeekViewComponentData[]
  currentDay: DayViewComponentProps | null
  currentRehearsal: {
    date: string
    time: string
    material: string
  } | null
  addRehearsal: {date: string} | null
}

import WEEKS from './mocks/data/weeks'

class App extends React.Component<Props, State> {
  constructor() {
    super({})
    this.state = {
      week: 1,
      weeks: WEEKS,
      currentDay: null,
      currentRehearsal: null,
      addRehearsal: null
    }
  }

  next = () => {
    let week = this.state.week
    if (week < this.state.weeks.length - 1) {
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
    const currentDay = null
    this.setState({currentDay})
  }

  selectDay = (dayNum: number) => {
    if (dayNum >= 0 && dayNum <= 6) {
      const week = this.state.weeks[this.state.week]
      const day = week.days[dayNum]
      const rehearsals = day.rehearsals || []
      const currentDay = {
        date: day.date,
        rehearsals,
        onClick: this.dismissDay,
        selectRehearsal: this.selectRehearsal,
        showAddRehearsal: this.showAddRehearsal
      }
      this.setState({currentDay})
    }
  }

  selectRehearsal = (rehearsalNum: number) => {
    const day = this.state.currentDay!
    const date = day.date
    const rehearsal = day.rehearsals[rehearsalNum]
    const currentRehearsal = {date, ...rehearsal}
    this.setState({currentRehearsal})
  }

  dismissRehearsal = () => {
    const currentRehearsal = null
    this.setState({currentRehearsal})
  }

  dismissAddRehearsal = () => {
    this.setState({addRehearsal: null})
  }

  addRehearsal = (time: string, material: string) => {
    const currentDay = this.state.currentDay!
    const date = currentDay.date

    const weeks = this.state.weeks 
    const week = weeks[this.state.week]
    const days = week.days
    const idx = days.findIndex(_day => {
      return _day.date === date
    })
    const day = days[idx]

    const newRehearsal = {
      time,
      material
    }
    let rehearsals: {time: string, material: string}[]
    if (day.rehearsals !== undefined) {
      rehearsals = [...day.rehearsals, newRehearsal]
    } else {
      rehearsals = [newRehearsal]
    }

    day.rehearsals = rehearsals
    week.days[idx] = day
    weeks[this.state.week] = week

    currentDay.rehearsals = rehearsals

    this.setState({weeks, currentDay}, () => {
      this.dismissAddRehearsal()
    })
  }
  
  showAddRehearsal = (date: string) => {
    this.setState({addRehearsal: {date}})
  }

  render() {
    const week = this.state.weeks[this.state.week]
    if (this.state.addRehearsal) {
      return (
        <AddRehearsalComponent
          date={this.state.addRehearsal.date}
          dismiss={this.dismissAddRehearsal}
          addRehearsal={this.addRehearsal}
        />
      )
    } else if (this.state.currentRehearsal !== null) {
      return (
        <RehearsalViewComponent 
          {...this.state.currentRehearsal} 
          dismissRehearsal={this.dismissRehearsal}
        />
      )
    } else if (this.state.currentDay !== null) {
      return (
        <DayViewComponent 
          {...this.state.currentDay}
        />
      )
    }
    // const week = this.state.weeks[this.state.week]
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
