import React, { useState } from 'react';
import "./Videoshow.css"
import ReactPlayer from 'react-player/lazy'
import { AiOutlineLike ,AiOutlineDislike } from "react-icons/ai"
import { MdOutlineWatchLater , MdPlaylistAdd ,MdDone } from 'react-icons/md'
import { usePlaylist, useWatchLator } from '../../context';
import { findInArray } from '../../Utilis/find';


function VideoshowView({ videos, videoId }) {
    
const [isExpanded, setIsExpanded] = useState(false)
function toggleExpanded() {setIsExpanded(!isExpanded)}

const {_id , iframeId , title , description , creator , publishedAt } = videos
const { watchState, watchDispatch } = useWatchLator()
const {watchlatorItem} =watchState
console.log(watchlatorItem)

const isInWatchlator = findInArray(_id ,watchlatorItem)
const watchHandler = ( videos , _id) => {
    if (isInWatchlator) {
        watchDispatch({
            type: "REMOVE-TO-WATCH-LATOR",
            payload: _id
        })
        
    } else {
        watchDispatch({
            type: "SAVE-TO-WATCH-LATOR",
            payload: videos
        })
    }
    } 

    
    const {  playlistDispatch } = usePlaylist()
 
    
return (<>
   
<div key={videoId}>
        <ReactPlayer url={`https://www.youtube.com/embed/${iframeId}`} controls={true} playing={true} />
        {/* <iframe width="640" height="385" src={`https://www.youtube.com/embed/${iframeId}`}allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>  */}
        <h2>{title}</h2>
        <div className='videoshowview-middle-container'>
        <h3 className='margin0'>{creator}</h3>
        
        <div className='all-btn-container'>
        <div className='btn-container'>
            <span className='like-btn btn-hover'><AiOutlineLike className='bars-icon' />&nbsp;65.4K</span>
            <div className="vertical-line"></div>
            <span className='like-btn btn-hover'><AiOutlineDislike className='bars-icon' /></span>
        </div>
        
        <div className='onclick-btn-continer-main'>
            <span className='onclick-btn-container btn-hover' onClick={() => watchHandler(videos , _id )}>
               {isInWatchlator ? <MdDone className='bars-icon'/> :  <MdOutlineWatchLater className='bars-icon' />}        
            </span>
            <span className='onclick-btn-container btn-hover' onClick={()=>playlistDispatch({type: "OPEN-MODAL" })}><MdPlaylistAdd  className='bars-icon'/></span>
        </div>
        </div>
    </div>
        <div className='video-discription'>
            <p className='margin0 Font'>{publishedAt} </p>
            <p className='margin0 Font'>{isExpanded ? description : description.slice(0 , 150)+"..."}</p>
            <h4 className='margin0 Showmore-btn btn-hover' onClick={toggleExpanded}>{isExpanded ? "Show Less" : "Show More"}</h4>
</div>
</div>

</>)  
}
export {VideoshowView}