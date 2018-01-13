import Week from './week'

export default class SchedulePreviewModel {
  readonly week: Week
  readonly rehearsalList: string[]

  constructor(w: Week, rehearsalList: string[]) {
    this.week = w
    this.rehearsalList = rehearsalList
  }
}