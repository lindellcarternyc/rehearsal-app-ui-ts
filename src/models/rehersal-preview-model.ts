import Day from './day'
import * as moment from 'moment'
export default class RehearsalPreviewModel {
  readonly day: Day
  readonly startTime: moment.Moment
  readonly endTime: moment.Moment

  constructor(day: Day, startTime: moment.Moment, endTime: moment.Moment) {
    this.day = day
    this.startTime = startTime
    this.endTime = endTime
  }
}