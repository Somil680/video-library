import { createContext, useContext, useReducer } from "react";
import {historyReducer} from "../reducer/index"

const historyContext = createContext()

const HistoryProvider = ({ children }) => {
    
    const [historyState , historyDispatch] = useReducer(historyReducer , {historyItem : []})

    return <historyContext.Provider
     value={{historyState , historyDispatch}}
    >{children}</historyContext.Provider>
}

const useHistory = () => useContext(historyContext)

export {HistoryProvider , useHistory}