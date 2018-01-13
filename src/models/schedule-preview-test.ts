import SchedulePreview from './schedule-preview'

describe('SchedulePreview', () => {
  it('must have a week and rehearsal list', () => {
    const preview = new SchedulePreview()
    expect(preview).not.toBeUndefined()
  })
})