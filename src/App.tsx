import * as React from 'react'
import './App.css'

import WeekPreviewBar from './components/week-preview-bar/week-preview-bar'

class App extends React.Component {
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
        />
      </div>
    )
  }
}

export default App
