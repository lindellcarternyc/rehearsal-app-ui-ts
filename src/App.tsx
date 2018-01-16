import * as React from 'react'
import './App.css'
import WeekViewComponent, { WeekViewComponentData, }  from './components/week-view/week-view-component'
import DayViewComponent, { DayViewComponentProps } from './components/day-view/day-view-component'
import RehearsalViewComponent from './components/rehearsal-view/rehearsal-view-component'
import AddRehearsalComponent from './components/add-rehearsal/add-rehearsal-component'

import RehearsalModel from './models/rehearsal-model'

interface Props {

}

interface State {
  selectedWeekId: number
  selectedDayId: number | null
  weeks: WeekViewComponentData[]
  currentDay: DayViewComponentProps | null
  currentRehearsal: {
    date: string
    rehearsal: RehearsalModel
  } | null
  addRehearsal: {date: string} | null
}

import WEEKS from './mocks/data/weeks'

class App extends React.Component<Props, State> {
  constructor() {
    super({})
    this.state = {
      selectedWeekId: 1,
      selectedDayId: null,
      weeks: WEEKS,
      currentDay: null,
      currentRehearsal: null,
      addRehearsal: null
    }
  }

  next = () => {
    if (this.state.selectedWeekId < this.state.weeks.length - 1) {
      const selectedWeekId = this.state.selectedWeekId + 1
      this.setState({selectedWeekId})
    }
  }

  previous = () => {
    if (this.state.selectedWeekId > 0) {
      const selectedWeekId = this.state.selectedWeekId - 1
      this.setState({selectedWeekId})
    }
  }

  dismissDay = () => {
    const selectedDayId = null
    this.setState({selectedDayId})
  }

  selectDay = (dayNum: number) => {
    if (dayNum >= 0 && dayNum <= 6) {
      const selectedDayId = dayNum
      const week = this.state.weeks[this.state.selectedWeekId]
      const day = week.days[dayNum]
      const rehearsals = day.rehearsals || []
      const currentDay = {
        date: day.date,
        rehearsals,
        onClick: this.dismissDay,
        selectRehearsal: this.selectRehearsal,
        showAddRehearsal: this.showAddRehearsal
      }
      this.setState({currentDay, selectedDayId})
    }
  }

  selectRehearsal = (rehearsalNum: number) => {
    const { weeks, selectedWeekId, selectedDayId } = this.state
    if (selectedDayId !== null) {
      const week = weeks[selectedWeekId]
      const day = week.days[selectedDayId]
      if (day.rehearsals !== undefined) {
        const rehearsal = day.rehearsals[rehearsalNum]
        const currentRehearsal = {date: day.date, rehearsal}
        this.setState({currentRehearsal})
      } else {
        throw new Error('Rehearsals are undefined')
      }
    } else {
      throw new Error('No selected day')
    }
  }

  dismissRehearsal = () => {
    const currentRehearsal = null
    this.setState({currentRehearsal})
  }

  dismissAddRehearsal = () => {
    this.setState({addRehearsal: null})
  }

  addRehearsal = (time: string, material: string) => {
    const selectedWeekId = this.state.selectedWeekId
    const currentDay = this.state.currentDay!
    // const date = currentDay.date

    const weeks = this.state.weeks 
    const week = weeks[selectedWeekId]
    const days = week.days
    const selectedDayId = this.state.selectedDayId!
    const day = days[selectedDayId]

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
    week.days[selectedDayId] = day
    weeks[selectedWeekId] = week

    currentDay.rehearsals = rehearsals

    this.setState({weeks, currentDay}, () => {
      this.dismissAddRehearsal()
    })
  }
  
  showAddRehearsal = (date: string) => {
    this.setState({addRehearsal: {date}})
  }

  render() {
    const { selectedWeekId, selectedDayId } = this.state
    const week = this.state.weeks[selectedWeekId]
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
    } else if (selectedDayId !== null) {
      const day = week.days[selectedDayId]
      const rehearsals = day.rehearsals || []
      return (
        <DayViewComponent 
          {...day}
          rehearsals={rehearsals}
          onClick={this.dismissDay}
          selectRehearsal={this.selectRehearsal}
          showAddRehearsal={this.showAddRehearsal}
        />
      )
    }
    
    const days = week.days
    return (
      <WeekViewComponent 
        days={days}
        previous={this.previous}
        next={this.next}
        selectDay={this.selectDay}
      />
    )
  }
}

export default App
