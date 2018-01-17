import OperaModel from '../../models/opera-model'
// import Chara
import characters from './characters'

const MockOpera: OperaModel = {
  title: 'Madama Butterfly',
  majorSections: [
    {
      title: 'Act I',
      minorSections: [
        {
          title: 'Scene 1',
          start: 'Rehearsal #1',
          end: 'Rehearsal #17',
          characters: [
            characters.Kuroko, characters.Goro, 
            characters.Pinkerton, characters.Suzuki
          ]
        },
        {
          title: 'Scene 2',
          start: 'Rehearsal #17',
          end: 'Rehearsal #37',
          characters: [
            characters.Kuroko, characters.Goro, 
            characters.Pinkerton, characters.Sharpless
          ]
        },
        {
          title: 'Scene 3',
          start: 'Rehearsal #37',
          end: 'Rehearsal #59',
          characters: [
            characters.Kuroko, characters.Goro,
            characters.Pinkerton, characters.Sharpless,
            characters.CioCioSan, characters.Suzuki,
            characters.TheMother, characters.TheCousin,
            characters.TheAunt, characters.Yakuside,
            characters.MaleChorus, characters.FemaleChorus
          ]
        },
        {
          title: 'Scene 4',
          start: 'Rehearsal #59',
          end: 'Rehearsal #79',
          characters: [
            characters.Kuroko, characters.Goro,
            characters.Pinkerton, characters.Sharpless,
            characters.CioCioSan, characters.Suzuki,
            characters.ImperialCommissioner, characters.Registrar,
            characters.TheMother, characters.TheAunt,
            characters.Yakuside, characters.MaleChorus, characters.FemaleChorus
          ]
        },
        {
          title: 'Scene 5',
          start: 'Rehearsal #79',
          end: 'Rehearsal #82',
          characters: [
            characters.Pinkerton, characters.CioCioSan
          ]
        },
        {
          title: 'Scene 6',
          start: 'Rehearsal #82',
          end: 'Rehearsal #100',
          characters: [
            characters.Kuroko, characters.Goro, characters.Pinkerton,
            characters.Sharpless, characters.CioCioSan, characters.Suzuki,
            characters.ImperialCommissioner, characters.Registrar,
            characters.TheMother, characters.TheCousin, characters.TheAunt,
            characters.Yakuside, characters.MaleChorus, characters.FemaleChorus
          ]
        },
        {
          title: 'Scene 7',
          start: 'Rehearsal #100',
          end: 'Rehearsal #111',
          characters: [
            characters.Kuroko, characters.Goro, characters.Pinkerton,
            characters.Sharpless, characters.CioCioSan, characters.Suzuki,
            characters.TheMother, characters.TheCousin, characters.TheAunt,
            characters.Yakuside, characters.TheBonze, characters.MaleChorus,
            characters.FemaleChorus
          ]
        },
        {
          title: 'Scene 8',
          start: 'Rehearsal #111',
          end: 'End of ACT I',
          characters: [
            characters.Kuroko, characters.CioCioSan,
            characters.Pinkerton, characters.Suzuki
          ]
        }
      ]
    },
    {
      title: 'Act II',
      minorSections: [
        {
          title: 'Scene 1',
          start: 'Rehearsal #1',
          end: '2 mm before Rehearsal #2',
          characters: [
            characters.Kuroko, characters.Suzuki, characters.CioCioSan
          ]
        },
        {
          title: 'Scene 2',
          start: '2 mm before Rehearsal #2',
          end: 'Rehearsal #28',
          characters: [
            characters.Kuroko, characters.Suzuki, characters.CioCioSan,
            characters.Goro, characters.Sharpless
          ]
        },
        {
          title: 'Scene 3',
          start: 'Rehearsal #28',
          end: 'Rehearsal #41',
          characters: [
            characters.Kuroko, characters.Suzuki,
            characters.Goro, characters.Sharpless,
            characters.PrinceYamadori
          ]
        },
        {
          title: 'Scene 4',
          start: 'Rehearsal #41',
          end: 'Rehearsal #60',
          characters: [
            characters.Kuroko, characters.Suzuki, characters.CioCioSan,
            characters.Sharpless, characters.Sorrow
          ]
        },
        {
          title: 'Scene 5',
          start: 'Rehearsal #60',
          end: 'Rehearsal #82',
          characters: [
            characters.Kuroko, characters.Suzuki, characters.CioCioSan,
            characters.Sorrow, characters.Goro
          ]
        },
        {
          title: 'Scene 6',
          start: 'Rehearsal #82',
          end: 'END of ACT II',
          characters: [
            characters.Kuroko, characters.Suzuki,
            characters.CioCioSan, characters.Sorrow
          ]
        }
      ]
    },
    {
      title: 'Act III', 
      minorSections: [
        {
          title: 'Prologue',
          start: 'Rehearsal #1',
          end: 'Rehearsal #4',
          characters: [
            characters.Kuroko, characters.Dancer
          ]
        },
        {
          title: 'Scene 1',
          start: 'Rehearsal #4',
          end: 'Rehearsal #16',
          characters: [
            characters.Kuroko, characters.Suzuki,
            characters.CioCioSan, characters.Sorrow
          ]
        },
        {
          title: 'Scene 2',
          start: 'Rehearsal #16',
          end: 'Rehearsal #23',
          characters: [
            characters.Kuroko, characters.Suzuki, 
            characters.Pinkerton, characters.Sharpless,
            characters.KatePinkerton
          ]
        },
        {
          title: 'Scene 3',
          start: 'Rehearsal #23',
          end: 'Rehearsal #29',
          characters: [
            characters.Kuroko, characters.Pinkerton, characters.Sharpless
          ]
        },
        {
          title: 'Scene 4',
          start: 'Rehearsal #29',
          end: 'Rehearsal #43',
          characters: [
            characters.Kuroko, characters.Sharpless,
            characters.Suzuki, characters.KatePinkerton,
            characters.CioCioSan
          ]
        },
        {
          title: 'Scene 5',
          start: 'Rehearsal #43',
          end: 'Rehearsal #56',
          characters: [
            characters.Kuroko, characters.Suzuki,
            characters.CioCioSan, characters.Sorrow
          ]
        },
        {
          title: 'Scene 6',
          start: 'Rehearsal #56',
          end: 'END of OPERA',
          characters: [
            characters.Kuroko, characters.CioCioSan,
            characters.Sorrow, characters.Sharpless,
            characters.Pinkerton
          ]
        }
      ]
    }
  ]
}

export default MockOpera