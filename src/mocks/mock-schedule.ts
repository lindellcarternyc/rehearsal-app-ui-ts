import * as moment from 'moment'

import Day from '../models/day'
import RehearsalModel from '../models/rehearsal-model'

export const DAYS = [
  new Day(
    moment('1-12-18', 'MM-DD-YY'),
    [
      new RehearsalModel('9:00', '12:00')
    ]
  ),
  new Day(
    moment('1-14-18', 'MM-DD-YY'),
    [
      new RehearsalModel('9:00', '12:00'),
      new RehearsalModel('15:00', '19:00')
    ]
  ),
  new Day(
    moment('1-15-18', 'MM-DD-YY'),
    [
      new RehearsalModel('8:00', '14:00')
    ]
  )
]

export const getRehearsalsForDay = (day: Day): RehearsalModel[] => {
  const possibleDayList = DAYS.filter(_day => {
    return _day.date === day.date
  })

  if (possibleDayList.length > 0 ) {
    return possibleDayList[0].rehearsals
  } else {
    return []
  }
}