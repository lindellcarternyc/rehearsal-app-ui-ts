import * as moment from 'moment'

export default class Day {
  readonly date: number
  readonly month: number
  readonly year: number
  readonly name: string
  readonly moment: moment.Moment
  rehearsals: string[]

  constructor(m: moment.Moment) {
    this.date = m.date()
    this.month = m.month()
    this.year = m.year()
    this.name = m.format('dd').charAt(0)
    this.moment = m
    this.rehearsals = []
  }
}