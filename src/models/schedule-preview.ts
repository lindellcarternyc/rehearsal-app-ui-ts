import Week from './week'
import RehearsalPreviewModel from './rehersal-preview-model'

export default class SchedulePreviewModel {
  readonly week: Week
  readonly rehearsalList: RehearsalPreviewModel[]

  constructor(w: Week, rehearsalList: RehearsalPreviewModel[]) {
    this.week = w
    this.rehearsalList = rehearsalList
  }
}