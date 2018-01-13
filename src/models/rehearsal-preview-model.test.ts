import * as moment from 'moment'
import Day from './day'
import RehearsalPreviewModel from './rehersal-preview-model'

describe('RehearsalPreviewModel', () => {
  it('must have a day property start time and end time', () => {
    const m = moment('1-12-18', 'MM-DD-YY')
    const startTime = moment('1-12-18 9:00', 'MM-DD-YY HH:mm')
    const endTime = moment('1-12-18 16:00', 'MM-DD-YY HH:mm')
    const d = new Day(m)
    const model = new RehearsalPreviewModel(d, startTime, endTime)
    expect(model).toHaveProperty('day', d)
    expect(model).toHaveProperty('startTime', startTime)
    expect(model).toHaveProperty('endTime', endTime)
  })
})