import { GetEvents } from './events.interfaces'

export interface ContextValues {
  planSummaries: string[]
  setPlanSummaries: React.Dispatch<React.SetStateAction<string[]>>
  events: GetEvents[]
  setEvents: React.Dispatch<React.SetStateAction<GetEvents[]>>
  isFetching: boolean
}