import * as moment from 'moment'

import RehearsalModel from './rehearsal-model'

export default class Day {
  readonly date: number
  readonly month: number
  readonly year: number
  readonly name: string
  readonly moment: moment.Moment
  rehearsals: RehearsalModel[]

  constructor(m: moment.Moment, rehearsals: RehearsalModel[] = []) {
    this.date = m.date()
    this.month = m.month()
    this.year = m.year()
    this.name = m.format('dd').charAt(0)
    this.moment = m
    this.rehearsals = []
  }
}