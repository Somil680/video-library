import React from 'react';
import "./Home.css"
import { Navbar, Sidebars } from "../../Components/index";
import { useVideos } from "../../context/videoContext";
import { VideoView } from './VideoView';
const Home = () => {
     const { videoState } = useVideos()
  const { video } = videoState

  console.log(video)
   
   return (<>
      <div>
         <Navbar/>
     <Sidebars/>
        <div className='video-grid'>
            
     {video.map((items) => (<VideoView video={items} key={items._id} /> ))}
     </div>
  </div>      
</>)
}
export {Home}