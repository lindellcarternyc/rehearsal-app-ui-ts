export default class RehearsalModel {
  readonly start: string
  readonly end: string

  constructor(start: string, end: string) {
    this.start = start
    this.end = end
  }
}