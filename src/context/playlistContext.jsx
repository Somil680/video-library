import { createContext, useContext, useReducer } from "react";
import { playlistReducer , initialPlaylist } from "../reducer"; 

const playlistContext = createContext()

const PlaylistProvider = ({ children }) => {

    const [playlistState, playlistDispatch] = useReducer(playlistReducer, initialPlaylist)

    return <playlistContext.Provider
        value={{playlistState , playlistDispatch}}
    >{children}</playlistContext.Provider>


   
}

const usePlaylist = () => useContext(playlistContext)

export {PlaylistProvider , usePlaylist}