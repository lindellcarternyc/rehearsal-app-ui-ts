import * as React from 'react'
import './App.css'

import { WeekPreviewBar } from './components'
import Week from './models/week'
import * as moment from 'moment'

import SchedulePreview from './components/schedule-preview/schedule-preview'

interface Props {

}

interface State {
  week: Week
}

class App extends React.Component<Props, State> {
  constructor() {
    super({})
    this.state = {
      week: new Week(moment())
    }
  }

  backCallback  = (): void => {
    const week = this.state.week.previousWeek()
    this.setState({week})
  }
  forwardCallback = (): void => {
    const week = this.state.week.nextWeek()
    this.setState({week})
  }
  dayCallback = (num: number): void => {
    console.dir(`DAY: ${num}`)
  }
  
  render() {
    const { week } = this.state
    return (
      <div className='App'>
        <WeekPreviewBar 
          backCallback={this.backCallback}
          forwardCallback={this.forwardCallback}
          dayCallback={this.dayCallback}
          week={week}
        />
        <p>{week.start}</p>
        <p>{week.end}</p>
        <SchedulePreview week={week}/>
      </div>
    )
  }
}

export default App
