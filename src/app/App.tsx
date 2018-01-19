// React
import * as React from 'react'

// Components
import Navbar from '../components/navbar/navbar'
import Pages from '../components/pages/pages'

// Views
import OperaView from '../components/opera-view/opera-view-component'
import DayView from '../components/day-view/day-view'
import WeekView from '../components/week-view/week-view'

// Data
import MockOpera from '../mocks/data/opera'
import WEEKS from '../mocks/data/weeks'

// Models
import RehearsalModel from '../models/rehearsal-model'

enum CurrentPage {
  OperaView = 'operaView',
  DayView = 'dayView',
  WeekView = 'weekView'
}
enum CurrentPageTitle {
  OperaView = 'Opera View',
  DayView = 'Day View',
  WeekView = 'Week View',
  FAIL = 'FAIL'
}

interface State {
  currentPage: CurrentPage
  weekId: number
}

class App extends React.Component<{}, State> {
  state = {
    currentPage: CurrentPage.WeekView,
    weekId: 0
  }

  dismissDayView = () => {
    const currentPage = CurrentPage.OperaView
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
    return (
      <div>
      <Navbar currentPageTitle={this.currentPageTitle}/>
      <Pages
        currentPage={this.state.currentPage}
        components={{
          operaView: (
            <OperaView opera={MockOpera}/>
          ),
          dayView: (
            <DayView 
              date={WEEKS[0].days[0].date}
              rehearsals={[]}
              dismiss={this.dismissDayView}
            />
          ),
          weekView: (
            <WeekView 
              week={this.week} 
              getPreviousWeek={this.getPreviousWeek}
              getNextWeek={this.getNextWeek}
            />
          )
        }}
      />
      </div>
    )
 }
}

export default App