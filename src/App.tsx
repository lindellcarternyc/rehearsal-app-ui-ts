import * as React from 'react'
import './App.css'
import { WeekViewComponent } from './components/week-view/week-view-component';

interface Props {

}

interface State {
  // weekview: boolean
}

const MOCK: {date: string, times?: string[]}[] = [
  {
    date: 'Sun, January 14'
  },
  {
    date: 'Mon, January 15'
  },
  {
    date: 'Tue, January 16',
    times: ['19:00 - 22:00']
  },
  {
    date: 'Wed, January 17'
  },
  {
    date: 'Thu, January 18'
  },
  {
    date: 'Fri, January 19'
  },
  {
    date: 'Sat, January 20',
    times: [
      '13:00 - 14:30',
      '14:30 - 16:00',
      '16:00 - 18:00'
    ]
  }
]

class App extends React.Component<Props, State> {
  constructor() {
    super({})
    this.state = {

    }
  }
  
  render() {
    return <WeekViewComponent days={MOCK}/>
  }
}

export default App
