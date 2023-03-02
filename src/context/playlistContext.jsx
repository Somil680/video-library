import { createContext, useContext, useReducer } from "react";
import { playlistReducer } from "../reducer";

const playlistContext = createContext()

const PlaylistProvider = ({ children }) => {

    const [playlistState , playlistDispatch] = useReducer(playlistReducer , {Playlistitem : [] , isModal : false})

    return <playlistContext.Provider
        value={{playlistState , playlistDispatch}}
    >{children}</playlistContext.Provider>


   
}

const usePlaylist = () => useContext(playlistContext)

export {PlaylistProvider , usePlaylist}