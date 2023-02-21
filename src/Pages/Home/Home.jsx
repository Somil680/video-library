import React from 'react';
import "./Home.css"
import { useVideos } from "../../context/videoContext";
import { VideoView } from './VideoView';
const Home = () => {
     const { videoState } = useVideos()
  const { video } = videoState

  console.log(video)
   
    return (<>
        <div className='video-grid'>
            
     {video.map((items) => (<VideoView video={items} key={items._id} /> ))}
     </div>
        
</>)
}
export {Home}