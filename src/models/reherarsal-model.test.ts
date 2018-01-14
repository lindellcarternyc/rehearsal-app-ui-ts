import RehearsalModel from './rehearsal-model'

describe('RehearsalModel', () => {
  it('should create a Rehearsal model from two string inputs', () => {
    const start = '12:00'
    const end = '16:00'
    const model = new RehearsalModel(start, end)
    expect(model).not.toBeUndefined()

    expect(model).toHaveProperty('start', start)
    expect(model).toHaveProperty('end', end)
  })
})