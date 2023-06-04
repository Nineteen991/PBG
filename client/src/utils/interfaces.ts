export interface CarouselArray {
  carouselArray: string[]
  captions: string[]
  includeDots: boolean
}

export interface Clients {
  client: string
}

export interface ContextValues {
  planSummaries: string[]
  setPlanSummaries: React.Dispatch<React.SetStateAction<string[]>>
}