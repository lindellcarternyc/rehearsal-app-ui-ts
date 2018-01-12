import Week from './week'

describe('Week', () => {
  it('should have 7 days', () => {
    const w = new Week()
    expect(w).toHaveProperty('days')

    const days = w.days
    expect(days).toHaveLength(7)
  })

  const daynames = 'SMTWTFS'.split('')
  const week = new Week()
  const weekdays = week.days

  daynames.forEach((name, idx) => {
    it('should have have the name ' + name, () => {
      const actualDay = weekdays[idx]
      expect(actualDay).toHaveProperty('name')
      expect(actualDay.name).toBe(name)
    })
  })
})