import * as React from 'react'
import './App.css'

import { WeekPreviewBar } from './components'
import Week from './models/week'
import * as moment from 'moment'
import SchedulePreviewModel from './models/schedule-preview'

import SchedulePreview from './components/schedule-preview/schedule-preview'

interface Props {

}

interface State {
  week: Week
  schedulePreview: SchedulePreviewModel
}

class App extends React.Component<Props, State> {
  constructor() {
    super({})
    const week = new Week(moment())
    const preview = new SchedulePreviewModel(week, [])
    this.state = {
      week,
      schedulePreview: preview
    }
  }

  backCallback  = (): void => {
    const week = this.state.week.previousWeek()
    const schedulePreview = new SchedulePreviewModel(week, [])
    this.setState({week, schedulePreview})
  }
  forwardCallback = (): void => {
    const week = this.state.week.nextWeek()
    const schedulePreview = new SchedulePreviewModel(week, [])
    this.setState({week, schedulePreview})
  }
  dayCallback = (num: number): void => {
    console.dir(`DAY: ${num}`)
  }
  
  render() {
    const { week, schedulePreview } = this.state
    return (
      <div className='App'>
        <WeekPreviewBar 
          backCallback={this.backCallback}
          forwardCallback={this.forwardCallback}
          dayCallback={this.dayCallback}
          week={week}
        />
        <SchedulePreview model={schedulePreview}/>
      </div>
    )
  }
}

export default App
