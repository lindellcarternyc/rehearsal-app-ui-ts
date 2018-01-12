import * as React from 'react'
import './App.css'

import { WeekPreviewBar } from './components'
import Week from './models/week'
import * as moment from 'moment'

interface Props {

}

class App extends React.Component<Props> {
  week: Week

  constructor() {
    super({})
    this.week = new Week(moment())
  }

  backCallback  = (): void => {
    console.dir('BACK')
  }
  forwardCallback = (): void => {
    console.dir('FORWARD')
  }
  dayCallback = (num: number): void => {
    console.dir(`DAY: ${num}`)
  }
  render() {
    return (
      <div className='App'>
        <WeekPreviewBar 
          backCallback={this.backCallback}
          forwardCallback={this.forwardCallback}
          dayCallback={this.dayCallback}
          week={this.week}
        />
      </div>
    )
  }
}

export default App
