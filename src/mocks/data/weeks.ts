import { WeekViewComponentData } from '../../components/week-view/week-view-component'

const WEEKS: WeekViewComponentData[] = [
  {
    days: [
      {
        date: 'Sun, January 7'
      },
      {
        date: 'Mon, January 8'
      },
      {
        date: 'Tue, January 9'
      },
      {
        date: 'Wed, January 10'
      },
      {
        date: 'Thu, January 11'
      },
      {
        date: 'Fri, January 12'
      },
      {
        date: 'Sat, January 13'
      }
    ]
  },
  {
    days: [
      {
        date: 'Sun, January 14'
      },
      {
        date: 'Mon, January 15'
      },
      {
        date: 'Tue, January 16',
        rehearsals: [
          {
            time: '19:00 - 22:00',
            material: 'Act I non chorus scenes'
          }
        ]
      },
      {
        date: 'Wed, January 17'
      },
      {
        date: 'Thu, January 18'
      },
      {
        date: 'Fri, January 19'
      },
      {
        date: 'Sat, January 20',
        rehearsals: [
          {
            time: '13:00 - 14:30',
            material: 'Act 2, Scene 1'
          },
          {
            time: '14:30 - 16:00',
            material: 'Act 2, Scene 2'
          },
          {
            time: '16:00 - 18:00',
            material: 'Act 2, Scene 4'
          }
        ]
      }
    ]
  },
  {
    days: [
      {
        date: 'Sun, January 21'
      },
      {
        date: 'Mon, January 22'
      },
      {
        date: 'Tue, January 23',
        rehearsals: [
          {
            time: '19:00 - 20:30',
            material: 'Act 2, Scene 5'
          },
          {
            time: '20:30 - 22:00',
            material: 'Act 2, Scene 6'
          }
        ]
      },
      {
        date: 'Wed, January 24'
      },
      {
        date: 'Thu, January 25'
      },
      {
        date: 'Fri, January 26'
      },
      {
        date: 'Sat, January 27',
        rehearsals: [
          {
            time: '13:00 - 15:30',
            material: 'Run Act 2'
          },
          {
            time: '16:00 - 18:00',
            material: 'Act 3 Prologue'
          }
        ]
      }
    ]
  },
  {
    days: [
      {
        date: 'Sun, January 28'
      },
      {
        date: 'Mon, January 29'
      },
      {
        date: 'Tue, January 30',
        rehearsals: [
          {
            time: '19:00 - 20:00',
            material: 'Act 3, Scene 1'
          },
          {
            time: '20:00 - 21:00',
            material: 'Act 3, Scene 2'
          },
          {
            time: '21:00 - 22:00',
            material: 'Act 3, Scene 3'
          }
        ]
      },
      {
        date: 'Wed, January 31'
      },
      {
        date: 'Thu, February 1'
      },
      {
        date: 'Fri, February 2'
      },
      {
        date: 'Sat, February 3',
        rehearsals: [
          {
            time: '13:00 - 14:30',
            material: 'Act 3, Scene 4'
          },
          {
            time: '14:30 - 16:00',
            material: 'Act 3, Scene 5'
          },
          {
            time: '16:00 - 18:00',
            material: 'Act 3, Scene 6'
          }
        ]
      }
    ]
  }
]

export default WEEKS