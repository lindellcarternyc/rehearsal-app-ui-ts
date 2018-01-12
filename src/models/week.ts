export default class Week {
  days = 'SMTWTFS'.split('').map(n => {
    return {
      name: n
    }
  })
}