import Week from './week'

export default class SchedulePreview {
  readonly week: Week

  constructor(w: Week) {
    this.week = w
  }
}