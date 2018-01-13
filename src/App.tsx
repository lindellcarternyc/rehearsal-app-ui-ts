import * as React from 'react'
import './App.css'

import { WeekPreviewBar } from './components'
import Week from './models/week'
import Day from './models/day'
import * as moment from 'moment'
import SchedulePreviewModel from './models/schedule-preview'
import RehearsalPreviewModel from './models/rehersal-preview-model'

const mockDay = new Day(moment('1-12-2018', 'MM-DD-YYYY'))
const mockStart1 = moment('1-12-2018 9:00', 'MM-DD-YYYY HH:mm')
const mockEnd1 = moment('1-12-2018 12:00', 'MM-DD-YYYY HH:mm')
const mockRehearsal = new RehearsalPreviewModel(mockDay, mockStart1, mockEnd1)

const mockDay2 = new Day(moment('1-14-2018', 'MM-DD-YYYY'))
const mockStart2 = moment('1-14-2018 9:00', 'MM-DD-YYYY HH:mm')
const mockEnd2 = moment('1-14-2018 12:00', 'MM-DD-YYYY HH:mm')
const mockStart22 = moment('1-14-2018 15:00', 'MM-DD-YYYY HH:mm')
const mockEnd22 = moment('1-14-2018 19:00', 'MM-DD-YYYY HH:mm')

const mockDay3 = new Day(moment('1-15-2018', 'MM-DD-YYYY'))
const mockStart3 = moment('1-15-2018 8:00', 'MM-DD-YYYY HH:mm')
const mockEnd3 = moment('1-15-2018 14:00', 'MM-DD-YYYY HH:mm')

const mockReharsals2 = [
  new RehearsalPreviewModel(mockDay2, mockStart2, mockEnd2), 
  new RehearsalPreviewModel(mockDay2, mockStart22, mockEnd22), 
  new RehearsalPreviewModel(mockDay3, mockStart3, mockEnd3)
]

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
    const week = new Week(mockDay.moment)
    const preview = new SchedulePreviewModel(week, [mockRehearsal])
    this.state = {
      week,
      schedulePreview: preview
    }
  }

  update(week: Week) {
    let rehearsalList: RehearsalPreviewModel[] = []
    if (week.start === 'Jan 7') {
      rehearsalList.push(mockRehearsal)
    } else if (week.start === 'Jan 14') {
      rehearsalList = mockReharsals2
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
