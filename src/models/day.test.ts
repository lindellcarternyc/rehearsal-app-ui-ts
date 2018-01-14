import Day from './day'
import * as moment from 'moment'
// import { before } from 'jest'

describe('Day', () => {
  let testDay: moment.Moment = moment('1-12-2018', 'MM-DD-YYYY')

  it('should construct a day from a moment object', () => {
    testDay = moment('1-12-2018', 'MM-DD-YYYY')
    expect(testDay.day()).toBe(5)

    const day = new Day(testDay)
    expect(day).not.toBeUndefined()
  })

  it('should have a date, month, and year and name', () => {
    const day = new Day(testDay)
    expect(day.date).toBe(12)
    expect(day.month).toBe(0)
    expect(day.year).toBe(2018)
    expect(day.name).toBe('F')
  })

  describe('Day.rehearsals', () => {
    it('should be an array', () => {
      const day = new Day(testDay)
      expect(day).toHaveProperty('rehearsals', [])
    })
  })
})