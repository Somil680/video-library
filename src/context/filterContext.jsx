import React, { createContext, useContext , useReducer } from 'react';
import { filterReducder } from '../reducer';

const filterContext = createContext()

const FilterProvider = ({ children }) => {
    const [filterState , filterDispatch] =  useReducer(filterReducder , {Category : ""})
    return <filterContext.Provider value={{filterState , filterDispatch}}
    >{children}</filterContext.Provider>
}

const useFilter = () => useContext(filterContext)

export {FilterProvider , useFilter}