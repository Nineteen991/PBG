export interface GetEvents {
  createdAt: Date 
  eventLink: string 
  eventName: string 
  updatedAt: Date 
  __v: number 
  _id: string
}

export interface AddEventState {
  eventName: string 
  eventLink: string
}