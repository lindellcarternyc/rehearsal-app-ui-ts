import * as moment from 'moment'

interface Day {
  name: string
  date: number
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

  nextWeek(): Week {
    const nextMoment = moment(this.moment).days(7)
    return new Week(nextMoment)
  }

  previousWeek(): Week {
    const previousMoment = moment(this.moment).days(-7)
    return new Week(previousMoment)
  }

  private initDays() {
    let days: Day[] = []

    for (let i = 0; i <= 6; i++) {
      let m = moment(this.moment).day(i)
      const name = m.format('dd').charAt(0)
      const date = m.date()
      days.push({name, date})
    }

    this._days = days
  }

  get days(): Day[] {
    return this._days
  }
}