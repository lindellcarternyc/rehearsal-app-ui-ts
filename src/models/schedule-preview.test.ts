import SchedulePreview from './schedule-preview'
import * as moment from 'moment'
import Week from './week'

describe('SchedulePreview', () => {
  it('must have a week and rehearsal list', () => {
    const m = moment('1-12-18', 'MM-DD-YY')
    const w = new Week(m)
  
    const preview = new SchedulePreview(w)
    expect(preview).not.toBeUndefined()
  })
})