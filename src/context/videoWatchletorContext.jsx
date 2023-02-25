import React, { createContext, useContext, useReducer } from 'react';
import { watchReducer } from '../reducer';

const watchlatorContext = createContext()

const WatchlatorProvider = ({ children }) => {
    const [watchState, watchDispatch] = useReducer(watchReducer, { watchlatorItem: [] })
    
    return <watchlatorContext.Provider
    value={{watchState, watchDispatch}}
    >{children}</watchlatorContext.Provider>
}

const useWatchLator = () => useContext(watchlatorContext)

export {WatchlatorProvider , useWatchLator}