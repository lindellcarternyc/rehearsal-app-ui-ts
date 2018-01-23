import * as React from 'react'
import './App.css'
// // import WeekViewComponent, { WeekViewComponentData, }  from './components/week-view/week-view-component'
// import DayViewComponent, {  } from './components/day-view/day-view'
// import RehearsalViewComponent from './components/rehearsal-view/rehearsal-view-component'
// import OperaViewComponent from './components/opera-view/opera-view-component'
// import AddEditRehearsalComponent, {
//   EditConfig, AddConfig
// } from './components/add-edit-rehearsal-component/add-edit-rehearsal-component'

// import RehearsalModel from './models/rehearsal-model'

// interface Props {

// }

// import { Menu, Icon } from 'semantic-ui-react'

// interface State {
//   selectedWeekId: number
//   selectedDayId: number | null
//   // weeks: WeekViewComponentData[]
//   currentRehearsal: {
//     date: string
//     rehearsal: RehearsalModel
//   } | null
//   addRehearsal: {date: string} | null
//   editRehearsal: {
//     date: string
//     rehearsal: RehearsalModel
//     rehearsalNum: number
//   } | null
//   showsOpera: boolean
// }

// // Mocks
// import WEEKS from './mocks/data/weeks'
// import MockOpera from './mocks/data/opera'

class App extends React.Component<{}> {
  // constructor() {
  //   super({})
  //   this.state = {
  //     selectedWeekId: 1,
  //     selectedDayId: null,
  //     // weeks: WEEKS,
  //     currentRehearsal: null,
  //     addRehearsal: null,
  //     editRehearsal: null,
  //     showsOpera: false
  //   }
  // }

  // next = () => {
  //   if (this.state.selectedWeekId < this.state.weeks.length - 1) {
  //     const selectedWeekId = this.state.selectedWeekId + 1
  //     this.setState({selectedWeekId})
  //   }
  // }

  // previous = () => {
  //   if (this.state.selectedWeekId > 0) {
  //     const selectedWeekId = this.state.selectedWeekId - 1
  //     this.setState({selectedWeekId})
  //   }
  // }

  // dismissDay = () => {
  //   const selectedDayId = null
  //   this.setState({selectedDayId})
  // }

  // selectDay = (dayNum: number) => {
  //   if (dayNum >= 0 && dayNum <= 6) {
  //     const selectedDayId = dayNum
  //     this.setState({selectedDayId})
  //   }
  // }

  // selectRehearsal = (rehearsalNum: number) => {
  //   const { weeks, selectedWeekId, selectedDayId } = this.state
  //   if (selectedDayId !== null) {
  //     const week = weeks[selectedWeekId]
  //     const day = week.days[selectedDayId]
  //     if (day.rehearsals !== undefined) {
  //       const rehearsal = day.rehearsals[rehearsalNum]
  //       const currentRehearsal = {date: day.date, rehearsal}
  //       this.setState({currentRehearsal})
  //     } else {
  //       throw new Error('Rehearsals are undefined')
  //     }
  //   } else {
  //     throw new Error('No selected day')
  //   }
  // }

  // cancelRehearsal = (rehearsalNum: number) => {
  //   const { selectedWeekId, selectedDayId, weeks } = this.state
    
  //   const week = weeks[selectedWeekId]
  //   if (selectedDayId !== null) {
  //     const day = week.days[selectedDayId]
  //     if (day.rehearsals !== undefined) {
  //       let rehearsals = day.rehearsals
  //       rehearsals.splice(rehearsalNum, 1)

  //       day.rehearsals = rehearsals
  //       week.days[selectedDayId] = day
  //       weeks[selectedWeekId] = week

  //       this.setState({weeks})
  //     } else {
  //       throw new Error('Cannot cancel rehearsal. Day has no rehearsals')
  //     }
  //   } else {
  //     throw new Error('No Day selected. Cannot delete rehearsal')
  //   }
  // }

  // dismissRehearsal = () => {
  //   const currentRehearsal = null
  //   this.setState({currentRehearsal})
  // }

  // dismissAddRehearsal = () => {
  //   this.setState({addRehearsal: null})
  // }

  // addRehearsal = (rehearsal: RehearsalModel) => {
  //   const selectedWeekId = this.state.selectedWeekId

  //   const weeks = this.state.weeks 
  //   const week = weeks[selectedWeekId]
  //   const days = week.days
  //   const selectedDayId = this.state.selectedDayId!
  //   const day = days[selectedDayId]

  //   let rehearsals: RehearsalModel[]
  //   if (day.rehearsals !== undefined) {
  //     rehearsals = [...day.rehearsals, rehearsal]
  //   } else {
  //     rehearsals = [rehearsal]
  //   }

  //   day.rehearsals = rehearsals
  //   week.days[selectedDayId] = day
  //   weeks[selectedWeekId] = week

  //   this.setState({weeks}, () => {
  //     this.dismissAddRehearsal()
  //   })
  // }
  
  // showAddRehearsal = (date: string) => {
  //   this.setState({addRehearsal: {date}})
  // }

  // dismissEditRehearsal = () => {
  //   this.setState({editRehearsal: null})
  // }

  // showEditRehearsal = (rehearsalNum: number) => {
  //   const { weeks, selectedWeekId, selectedDayId } = this.state

  //   const week = weeks[selectedWeekId]
  //   if (selectedDayId !== null) {
  //     const day = week.days[selectedDayId]
  //     if (day.rehearsals !== undefined) {
  //       const date = day.date
  //       const rehearsal = day.rehearsals[rehearsalNum]
  //       this.setState({editRehearsal: {date, rehearsal, rehearsalNum}})
  //     } else {
  //       return
  //     }
  //   } else {
  //     return
  //   }
  // }

  // editRehearsal = (rehearsalNum: number, rehearsal: RehearsalModel) => {
  //   this.dismissEditRehearsal()
  //   const { weeks, selectedWeekId, selectedDayId } = this.state
  //   if (selectedDayId !== null) {
  //     const week = weeks[selectedWeekId]
  //     const day = week.days[selectedDayId]
  //     if (day.rehearsals !== undefined) {
  //       let rehearsals = day.rehearsals
  //       const edited = Object.assign(
  //         {},
  //         rehearsals[rehearsalNum],
  //         {...rehearsal}
  //       )
  //       day.rehearsals[rehearsalNum] = edited
  //       week.days[selectedDayId] = day
  //       weeks[selectedWeekId] = week
  //       this.setState({weeks})
  //     } else {
  //       return
  //     }
  //   } else {
  //     return
  //   }
  // }

  // content = (): JSX.Element => {
  //   if (this.state.showsOpera) {
  //     return (
  //       <OperaViewComponent opera={MockOpera} />
  //     )
  //   } else if (this.state.editRehearsal !== null) {
  //     const config: EditConfig = {
  //       mode: 'Edit',
  //       rehearsal: this.state.editRehearsal.rehearsal,
  //       rehearsalNum: this.state.editRehearsal.rehearsalNum,
  //       editRehearsal: this.editRehearsal
  //     }
  //     return (
  //       <AddEditRehearsalComponent 
  //         opera={MockOpera}
  //         date={this.state.editRehearsal.date}
  //         dismiss={this.dismissEditRehearsal}
  //         config={config}
  //       />
  //     )
  //   }
  //   const { selectedWeekId, selectedDayId } = this.state
  //   const week = this.state.weeks[selectedWeekId]
  //   if (this.state.addRehearsal) {
  //     const config: AddConfig = {
  //       mode: 'Add',
  //       addRehearsal: this.addRehearsal,
  //     }
  //     return (
  //       // const config:
  //       <AddEditRehearsalComponent
  //         date={this.state.addRehearsal.date}
  //         dismiss={this.dismissAddRehearsal}
  //         opera={MockOpera}
  //         config={config}
  //       />
  //     )
  //   } else if (this.state.currentRehearsal !== null) {
  //     return (
  //       <RehearsalViewComponent 
  //         {...this.state.currentRehearsal} 
  //         dismissRehearsal={this.dismissRehearsal}
  //       />
  //     )
  //   } else if (selectedDayId !== null) {
  //     const day = week.days[selectedDayId]
  //     const rehearsals = day.rehearsals || []
  //     return (
  //       <DayViewComponent 
  //         {...day}
  //         rehearsals={rehearsals}
  //         selectRehearsal={this.selectRehearsal}
  //         cancelRehearsal={this.cancelRehearsal}
  //         showAddRehearsal={this.showAddRehearsal}
  //         showEditRehearsal={this.showEditRehearsal}
  //         dismiss={() => undefined}
  //       />
  //     )
  //   }
    
  //   const days = week.days
  //   return (
  //     <WeekViewComponent 
  //       days={days}
  //     />
  //   )
  // }

  // getMenuTitle = (): string => {
  //   if (this.state.showsOpera) {
  //     return 'Opera'
  //   }
  //   const { selectedDayId, weeks, selectedWeekId } = this.state
  //   const week = weeks[selectedWeekId]
  //   let title: string
  //   if (this.state.editRehearsal) {
  //     const date = week.days[selectedDayId!].date
  //     title = `Edit Rehearsal - ${date}`
  //   } else if (this.state.addRehearsal) {
  //     const date = week.days[selectedDayId!].date
  //     title = 'Add Rehearsal - ' + date 
  //   } else if (this.state.currentRehearsal) {
  //     const date = week.days[selectedDayId!].date
  //     title = 'Rehearsal - ' + date
  //   } else if (this.state.selectedDayId) {
  //     const date = week.days[this.state.selectedDayId].date
  //     title = 'Day View - ' + date
  //   } else {
  //     title = 'Week View'
  //   }
  //   return title
  // }

  // toggleView = ()  => {
  //   const { showsOpera } = this.state
  //   this.setState({showsOpera: !showsOpera})
  // }
  render() {
    // const title = this.getMenuTitle()
    // return (
    //   <div>
    //     <Menu fixed='top' inverted color='blue'>
    //       <Menu.Item onClick={this.toggleView}>
    //         <Icon name='tasks' />
    //       </Menu.Item>
    //       <Menu.Item name={title} />
    //     </Menu>
    //     {this.content()}
    //   </div>
    // )
    return (
      <p>App</p>
    )
  }
}

export default App
