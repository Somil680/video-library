import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios"

import { videoReducer } from "../reducer";

const videoContext = createContext()

const VedioProvider = ({children}) => {
    const [videoState, videoDispatch] = useReducer(videoReducer, { videos: [] })
    useEffect(() => {
        const fetchVideos = async () => {
          try {
              const videoData = await axios.get("/api/videos")
              videoDispatch({
                  type: "Fetchvideos",
                  payload : videoData.data.videos
              } )
          } catch (error) {
            
          }
      }  
      fetchVideos()
    } , [])
return <videoContext.Provider value={{videoState,videoDispatch}}>{children}</videoContext.Provider>
}
const useVideos = () => useContext(videoContext)
  
export {useVideos , VedioProvider}
