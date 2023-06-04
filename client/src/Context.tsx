import { createContext, ReactNode, useState } from "react"

import { ContextValues } from "./utils/interfaces/context.interfaces"

const Context = createContext<ContextValues | null>(null)

function ContextProvider({ children }: { children: ReactNode }) {
  const [planSummaries, setPlanSummaries] = useState<string[]>([])

  return (
    <Context.Provider value={{
      planSummaries,
      setPlanSummaries
    }}>
      { children }
    </Context.Provider>
  )
}

export { Context, ContextProvider }