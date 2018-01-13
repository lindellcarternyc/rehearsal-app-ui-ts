import Week from './week'

export default class SchedulePreview {
  readonly week: Week
  readonly rehearsalList: string[]

  constructor(w: Week, rehearsalList: string[]) {
    this.week = w
    this.rehearsalList = rehearsalList
  }
}