import { createContext, useContext, useReducer } from "react";

import {videoLibraryReducer , intialState} from "../reducer/index"

const videoLibraryContext = createContext()

const VideoLibraryHookProvider = ({ children }) => {
    const [State , Dispatch] = useReducer(videoLibraryReducer , intialState )
    return <videoLibraryContext.Provider
            value={{State , Dispatch}}
            >{children}</videoLibraryContext.Provider>
}

const useVideoLibraryHook = () => useContext(videoLibraryContext)

export {VideoLibraryHookProvider , useVideoLibraryHook}