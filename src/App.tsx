import * as React from 'react'
import './App.css'

import { WeekPreviewBar } from './components'
import Week from './models/week'
import * as moment from 'moment'

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
    console.dir('BACK')
  }
  forwardCallback = (): void => {
    console.dir('FORWARD')
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
      </div>
    )
  }
}

export default App
