import React from 'react';
import "./Home.css"
import {HiDotsVertical} from "react-icons/hi";
// import { useVideos } from "../../context/videoContext";
const VideoView = ({video}) => {
    //  const { videoState } = useVideos()
    //  const { video } = videoState
 const {_id , iframeId , title , creator} = video
return (<>
    <div className="Vedio-container" key={_id}>
        <img src={`https://i.ytimg.com/vi_webp/${iframeId}/mqdefault.webp `} alt="" className='video-image' />
        <div className='video-detail'>
        <span className='content-detail'>
        <h4 className='margin0'>{title}</h4>
        <p className='margin0'>{creator}</p>
        </span>
        <span>
                <HiDotsVertical className='bars-icon'/>
        </span> 
        </div>   
  </div>

</>)
}
export {VideoView}