import React from 'react';
import "./Home.css"
// import { useVideos } from "../../context/videoContext";
const VideoView = ({video}) => {
    //  const { videoState } = useVideos()
    //  const { video } = videoState
 const {_id , iframeId , title , creator} = video
return (<>
    <div className="Vedio-container" key={_id}>
        <img src={`https://i.ytimg.com/vi_webp/${iframeId}/mqdefault.webp `} alt="" className='video-image' />
        <div>
            <span>
        <p>{title}</p>
        <p>{creator}</p>
            </span>
            <span>
                
            </span> 
        </div>   
  </div>

</>)
}
export {VideoView}