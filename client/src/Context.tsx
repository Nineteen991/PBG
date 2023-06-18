import { createContext, ReactNode, useState } from "react"
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

import { ContextValues } from "./utils/interfaces/context.interfaces"
import { GetEvents } from './utils/interfaces/events.interfaces'

const Context = createContext<Partial<ContextValues>>(null!)

function ContextProvider({ children }: { children: ReactNode }) {
  const [planSummaries, setPlanSummaries] = useState<string[]>([])

  const [events, setEvents] = useState<GetEvents[]>([])

  const fetchEvents = async () => {
    await axios.get('http://localhost:5000/api/v1/events')
      .then(res => setEvents(res.data.events))
      .catch(error => console.error("Failed to fetch events: ", error))
  }

  const { isFetching } = useQuery({
    queryKey: ['events'],
    queryFn: fetchEvents
  })

  return (
    <Context.Provider value={{
      planSummaries,
      setPlanSummaries,
      events,
      setEvents,
      isFetching
    }}>
      { children }
    </Context.Provider>
  )
}

export { Context, ContextProvider }