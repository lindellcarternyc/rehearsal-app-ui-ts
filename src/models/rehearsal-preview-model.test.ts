import * as moment from 'moment'
import Day from './day'
import RehearsalPreviewModel from './rehersal-preview-model'

describe('RehearsalPreviewModel', () => {
  it('must have a day property', () => {
    const m = moment('1-12-18', 'MM-DD-YY')
    const d = new Day(m)
    const model = new RehearsalPreviewModel(d)
    expect(model).toHaveProperty('day', d)
  })
})