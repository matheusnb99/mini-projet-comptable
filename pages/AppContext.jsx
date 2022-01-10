import { createContext, useState, useCallback } from "react"
import initialState from "../Database/State"

const AppContext = createContext(initialState)

export const AppContextProvider = (props) => {
  const [state, setState] = useState(initialState)

  const add = useCallback((item) => {
    setState(...state.items, item)
  }, [])
  const toto = { add, state }

  return <AppContext.Provider {...props} value={toto} />
}
export default AppContext
