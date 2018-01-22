// React
import * as React from 'react'

// Components
import Navbar from '../components/navbar/navbar'
import Pages from '../components/pages/pages'

// Views
import OperaView from '../components/opera-view/opera-view-component'
import DayView from '../components/day-view/day-view'
import WeekView from '../components/week-view/week-view'
import RehearsalView from '../components/rehearsal-view/rehearsal-view-component'
import AddEditRehearsalView from '../components/add-edit-rehearsal-component/add-edit-rehearsal-component'

// Data
import MockOpera from '../mocks/data/opera'
import WEEKS from '../mocks/data/weeks'

// Models
import RehearsalModel from '../models/rehearsal-model'

enum CurrentPage {
  OperaView = 'operaView',
  DayView = 'dayView',
  WeekView = 'weekView',
  RehearsalView = 'rehearsalView',
  EditRehearsalView = 'editRehearsalView',
  AddRehearsalView = 'addRehearsalView'
}
enum CurrentPageTitle {
  OperaView = 'Opera View',
  DayView = 'Day View',
  WeekView = 'Week View',
  RehearsalView = 'Rehearsal View',
  EditRehearsalView = 'Edit Rehearsal',
  AddRehearsalView = 'Add Rehearsal',
  FAIL = 'FAIL'
}

interface State {
  currentPage: CurrentPage
  weekId: number
  selectedDay: {
    date: string
    rehearsals?: RehearsalModel[]
  }
  selectedDayNum: number
  selectedRehearsal: RehearsalModel | undefined
  selectedRehearsalNum: number | undefined
  weeks: {
    days: {
      date: string
      rehearsals?: RehearsalModel[]
    }[]
  }[]
}

class App extends React.Component<{}, State> {
  state = {
    currentPage: CurrentPage.WeekView,
    weekId: 0,
    selectedDay: {
      ...WEEKS[0].days[0]
    },
    selectedDayNum: 0,
    selectedRehearsal: undefined,
    selectedRehearsalNum: undefined,
    weeks: WEEKS
  }

  dismissDayView = () => {
    this.setState({currentPage: CurrentPage.WeekView})
  }

  selectDay = (dayNumber: number) => {
    const day = this.week.days[dayNumber]
    this.setState(
      {
        currentPage: CurrentPage.DayView,
        selectedDay: day,
        selectedDayNum: dayNumber
      }
    )
  }

  selectRehearsal = (rehearsalNumber: number) => {
    const  day  = this.state.selectedDay
    if (day.rehearsals !== undefined) {
      this.setState(
        {
          selectedRehearsal: day.rehearsals[rehearsalNumber],
          selectedRehearsalNum: rehearsalNumber,
          currentPage: CurrentPage.RehearsalView
        }
      )
  }
  }

  dismissRehearsalView = () => {
    const currentPage = CurrentPage.DayView
    this.setState({currentPage})
  }

  cancelRehearsal = (rehearsalNumber: number) => {
    const confirmedCancel = confirm('Cancel Rehearsal?')
    if (confirmedCancel) {
      const weeks = this.state.weeks
      const week = this.state.weeks[this.state.weekId]
      const day = week.days[this.state.selectedDayNum]
      const rehearsals = day.rehearsals!
      rehearsals.splice(rehearsalNumber, 1)
      day.rehearsals = rehearsals
      week.days[this.state.selectedDayNum] = day
      weeks[this.state.weekId] = week
      this.setState({weeks})
    }
  }

  showEditRehearsalView = (rehearsalNumber: number) => { 
    const selectedRehearsal = this.state.selectedDay.rehearsals![rehearsalNumber]
    const selectedRehearsalNum = rehearsalNumber
    const currentPage = CurrentPage.EditRehearsalView
    this.setState({currentPage, selectedRehearsal, selectedRehearsalNum})
  }

  dismissEditRehearsalView = () => { 
    const currentPage = CurrentPage.DayView
    this.setState({currentPage})
  }

  editRehearsalsal = (rehearsalNum: number, rehearsal: RehearsalModel) => {
    const week = this.week
    const day = week.days[this.state.selectedDayNum]
    day.rehearsals![rehearsalNum] = rehearsal
    week[this.state.selectedDayNum] = day
    const weeks = this.state.weeks
    weeks[this.state.weekId] = week

    this.setState({weeks})
    this.dismissEditRehearsalView()
  }

  showAddRehearsalView = () => {
    const currentPage = CurrentPage.AddRehearsalView
    this.setState({currentPage})
  }

  addRehearsal = (rehearsal: RehearsalModel) => {
    const weeks = this.state.weeks
    const week = weeks[this.state.weekId]
    const day = week.days[this.state.selectedDayNum]
    const rehearsals = day.rehearsals !== undefined ?
      [...day.rehearsals!, rehearsal] :
      [rehearsal]
    day.rehearsals = rehearsals
    week.days[this.state.selectedDayNum] = day
    weeks[this.state.weekId] = week
    const selectedDay = day
    this.setState({weeks, selectedDay})
    this.dismissAddRehearsalView()
  }

  dismissAddRehearsalView = () => {
    const currentPage = CurrentPage.DayView
    this.setState({currentPage})
  }

  get currentPageTitle(): CurrentPageTitle {
    switch (this.state.currentPage) {
      case CurrentPage.DayView:
        return CurrentPageTitle.DayView
      case CurrentPage.OperaView:
        return CurrentPageTitle.OperaView
      case CurrentPage.WeekView:
        return CurrentPageTitle.WeekView
      case CurrentPage.RehearsalView:
        return CurrentPageTitle.RehearsalView
      case CurrentPage.EditRehearsalView:
        return CurrentPageTitle.EditRehearsalView
      default: 
        return CurrentPageTitle.FAIL
    }
  }

  get week(): {days: {date: string, rehearsals?: RehearsalModel[]}[]} {
    return WEEKS[this.state.weekId]
  }

  getPreviousWeek = () => {
    let { weekId } = this.state
    if (weekId > 0) {
      this.setState({weekId: weekId - 1})
    }
  }

  getNextWeek = () => {
    let { weekId } = this.state
    if (weekId < WEEKS.length - 1) {
      this.setState({weekId: weekId + 1})
    }
  }

  render() {
    const { currentPage, selectedDay } = this.state
    return (
      <div>
      <Navbar currentPageTitle={this.currentPageTitle}/>
      <Pages
        currentPage={currentPage}
        components={{
          operaView: (
            <OperaView opera={MockOpera}/>
          ),
          dayView: (
            () => {
              return (
                <DayView 
                  date={selectedDay!.date}
                  rehearsals={selectedDay!.rehearsals || []}
                  dismiss={this.dismissDayView}
                  selectRehearsal={this.selectRehearsal}
                  cancelRehearsal={this.cancelRehearsal}
                  showEditRehearsal={this.showEditRehearsalView}
                  showAddRehearsal={this.showAddRehearsalView}
                />
              )
            }
          )(),
          weekView: (
            <WeekView 
              week={this.week} 
              getPreviousWeek={this.getPreviousWeek}
              getNextWeek={this.getNextWeek}
              selectDay={this.selectDay}
              showAddRehearsal={this.showAddRehearsalView}
            />
          ),
          rehearsalView: (
            () => {
              const day = this.state.selectedDay
              const rehearsal = this.state.selectedRehearsal!
              return (
                <RehearsalView 
                  date={day.date}
                  rehearsal={rehearsal}
                  dismissRehearsal={this.dismissRehearsalView}
                />
              )
            }
          )(),
          editRehearsalView: (
            <AddEditRehearsalView 
              opera={MockOpera}
              date={this.state.selectedDay.date}
              dismiss={this.dismissEditRehearsalView}
              config={{
                mode: 'Edit',
                rehearsal: this.state.selectedRehearsal!,
                rehearsalNum: this.state.selectedRehearsalNum!,
                editRehearsal: this.editRehearsalsal
              }}
            />
          ),
          addRehearsalView: (
            <AddEditRehearsalView 
              config={{
                mode: 'Add',
                addRehearsal: this.addRehearsal
              }}
              opera={MockOpera}
              date={selectedDay.date}
              dismiss={this.dismissAddRehearsalView}
            />
          )
        }}
      />
      </div>
    )
 }
}

export default App