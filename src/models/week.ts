import * as moment from 'moment'

interface Day {
  name: string
  num: number
}

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

  private initDays() {
    let days: Day[] = []

    for (let i = 0; i <= 6; i++) {
      let m = moment(this.moment).day(i)
      const name = m.format('dd').charAt(0)
      const num = -1
      days.push({name, num})
    }

    this._days = days
  }

  get days(): Day[] {
    return this._days
  }
}