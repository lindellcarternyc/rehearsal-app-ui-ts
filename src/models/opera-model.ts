import Character from './character'

export interface OperaMinorSection {
  title: string
  start: string
  end: string
  characters: Character[]
}

interface OperaMajorSection {
  title: string
  minorSections: OperaMinorSection[]
}

interface OperaModel {
  title: string
  majorSections: OperaMajorSection[]
}

export default OperaModel