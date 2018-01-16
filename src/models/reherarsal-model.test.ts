// import RehearsalModel from './rehearsal-model'

describe('RehearsalModel', () => {
  it('should create a Rehearsal model from two string inputs', () => {
    const start = '12:00'
    const end = '16:00'
    const time = start + ' - ' + end
    const material = 'material'
    const model = {time, material}

    expect(model).toHaveProperty('time', time)
    expect(model).toHaveProperty('material', material)
  })
})