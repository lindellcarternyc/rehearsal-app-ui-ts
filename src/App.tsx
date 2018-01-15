import * as React from 'react'
import './App.css'
import { WeekViewComponent } from './components/week-view/week-view-component'

interface Props {

}

interface State {
  // weekview: boolean
}

import WEEK_1 from './mocks/data/week1'

class App extends React.Component<Props, State> {
  constructor() {
    super({})
    this.state = {

    }
  }
  
  render() {
    return <WeekViewComponent days={WEEK_1.days}/>
  }
}

export default App
