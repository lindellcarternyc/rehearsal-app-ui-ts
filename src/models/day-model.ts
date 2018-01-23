import RehearsalModel from './rehearsal-model'

export default interface DayModel {
  date: string
  rehearsals?: RehearsalModel[]
}