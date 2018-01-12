import Week from './week'
import * as moment from 'moment'

describe('Week', () => {
  it('should accept a single parameter - `moment` object', () => {
    expect(() => {
      const _ = new Week(moment())
      expect(_).not.toBeUndefined()
    }).not.toThrow()

    // expect(() => {
    //   const __ = new Week()
    //   expect(__).toBeUndefined()
    // }).toThrow()
  })

  describe('Week.initDays', () => {
    it('should initialize days from a non Sunday', () => {
      const f = moment().day(5) // Friday
      const w = new Week(f)
      const n = f.day()
      expect(w.days[n].name).toBe('F')
    })

    it('should initialize days from a Sunday', () => {
      const s = moment().day(0)
      const ww = new Week(s)
      expect(ww.days[s.day()].name).toBe('S')
    })

    it('should provide the correct dates', () => {
      // Friday 12
      const dates = [7, 8, 9, 10, 11, 12, 13]
      const expectedNames = 'SMTWTFS'.split('')
      const expectedDays = dates.map((date, idx) => {
        return {
          name: expectedNames[idx],
          date
        }
      })

      const thisweek = new Week(moment())
      expect(thisweek.days).toEqual(expectedDays)
    })
  })

  describe('next week', () => {
    it('should generate the next week', () => {
      const m = moment()
      const week1 = new Week(m)
      const week2 = week1.nextWeek()
      expect(week2).toEqual(new Week(moment(m).days(7)))
    })
  })

  describe('previous week', () => {
    it('should generate the next week', () => {
      const mm = moment()
      const week1 = new Week(mm)
      const week2 = week1.previousWeek()
      expect(week2).toEqual(new Week(moment(mm).days(-7)))
    })
  })
})