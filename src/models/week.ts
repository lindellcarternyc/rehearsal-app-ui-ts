import * as moment from 'moment'

// interface Day {
//   name: string
//   date: number
// }

import Day from './day'

export default class Week {
  readonly moment: moment.Moment
  private _days: Day[]

  constructor(m: moment.Moment) {
    if (m === null || m === undefined) {
      const msg = 'A week cannot be constructed without a moment object'
      throw new Error(msg)
    }
    this.moment = m
    this.initDays()
  }

  nextWeek(): Week {
    const nextMoment = moment(this.moment).week(this.moment.week() + 1)
    return new Week(nextMoment)
  }

  previousWeek(): Week {
    const previousMoment = moment(this.moment).week(this.moment.week() - 1)
    return new Week(previousMoment)
  }

  private initDays() {
    let days: Day[] = []

    for (let i = 0; i <= 6; i++) {
      let m = moment(this.moment).day(i)
      days.push(new Day(m))
    }

    this._days = days
  }

  get days(): Day[] {
    return this._days
  }

  get start(): string {
    const day = this._days[0]
    const month = day.moment.format('MMM')
    const date = day.date

    return `${month} ${date}`
  }

  get end(): string {
    const month = this.moment.format('MMM')
    const date = this._days[6].date
    return `${month} ${date}`
  }
}