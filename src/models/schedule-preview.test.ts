import SchedulePreviewModel from './schedule-preview'
import RehearsalPreviewModel from './rehersal-preview-model'
import * as moment from 'moment'
import Week from './week'

describe('SchedulePreviewModel', () => {
  it('must have a week and rehearsal list', () => {
    const m = moment('1-12-18', 'MM-DD-YY')
    const w = new Week(m)
    const rehearsalList: RehearsalPreviewModel[] = []
  
    const preview = new SchedulePreviewModel(w, rehearsalList)
    expect(preview).toHaveProperty('week', w)
    expect(preview).toHaveProperty('rehearsalList', rehearsalList)
  })
})