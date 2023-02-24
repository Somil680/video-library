import React from 'react';
import "./Videoshow.css"
import ReactPlayer from 'react-player/lazy'
import { AiOutlineLike ,AiOutlineDislike } from "react-icons/ai"

function VideoshowView({ videos, videoId }) {

return (<>
<div className='Videoplay-container'> 
{videos.map((videos, videoId) => {
return (<div key={videoId}>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${videos.iframeId}`} controls={true} playing={true} />
            <h2>{videos.title}</h2>
                <div className='videoshowview-middle-container'>
                    <h3>{videos.creator}</h3>
                        <div className='btn-container'>
                            <span className='like-btn'><AiOutlineLike className='bars-icon' />&nbsp;65.4K</span>
                            <div className="vertical-line"></div>
                            <span className='like-btn'><AiOutlineDislike className='bars-icon' /></span>
                        </div>
                </div>
                <div className='video-discription'>
                    <p className='margin0 Font'>{videos.publishedAt} </p>
                    <p className='margin0 Font'>{videos.description}</p>
                </div>
</div>)})}
</div>  
</>)  
}
export {VideoshowView}
