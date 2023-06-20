export interface AddEventState {
  eventName: string 
  eventLink?: string
  eventDay: string
  eventTime?: string
  eventType?: string
  eventDesc: string
}

export interface GetEvents extends AddEventState {
  createdAt: Date
  updatedAt: Date 
  __v: number 
  _id: string
}