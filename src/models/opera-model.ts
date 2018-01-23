import CharacterModel from './character-model'

export interface OperaMinorSection {
  title: string
  start: string
  end: string
  characters: CharacterModel[]
}

export interface OperaMajorSection {
  title: string
  minorSections: OperaMinorSection[]
}

interface OperaModel {
  title: string
  majorSections: OperaMajorSection[]
}

export default OperaModel