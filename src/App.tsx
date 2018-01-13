import * as React from 'react'
import './App.css'

import { WeekPreviewBar } from './components'
import Week from './models/week'
import Day from './models/day'
import * as moment from 'moment'
import SchedulePreviewModel from './models/schedule-preview'
import RehearsalPreviewModel from './models/rehersal-preview-model'

const mockDay = new Day(moment('1-12-2018', 'MM-DD-YYYY'))
const mockRehearsal = new RehearsalPreviewModel(mockDay)

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

  update(week: Week) {
    let rehearsalList: RehearsalPreviewModel[] = []
    if (week.start === 'Jan 7') {
      rehearsalList.push(mockRehearsal)
    }
    const schedulePreview = new SchedulePreviewModel(week, rehearsalList)
    this.setState({week, schedulePreview})
  }

  backCallback  = (): void => {
    const { week } = this.state
    this.update(week.previousWeek())
  }

  forwardCallback = (): void => {
    const { week } = this.state
    this.update(week.nextWeek())
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
