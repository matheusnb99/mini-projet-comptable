import { createContext, useState, useCallback } from "react"
import initialState from "../src/Database/State"

const AppContext = createContext(initialState)

export const AppContextProvider = (props) => {
  const [state, setState] = useState(initialState)

  const add = useCallback((item) => {
    setState((currentState) => {
      return currentState.concat(item)
    })
  }, [])

  return <AppContext.Provider {...props} value={{ add, state }} />
}
export default AppContext
