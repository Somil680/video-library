import React, { useState } from 'react';
import "./Videoshow.scss"
import ReactPlayer from 'react-player/lazy'
import { AiOutlineLike,AiFillLike ,AiOutlineDislike } from "react-icons/ai"
import { MdOutlineWatchLater , MdPlaylistAdd ,MdDone } from 'react-icons/md'
import { useLike, usePlaylist, useWatchLator } from '../../context';
import { findInArray } from '../../Utilis/find';
import { PlaylistModal } from '../../Components/index';

function VideoshowView({ videos, videoId }) {

const [isExpanded, setIsExpanded] = useState(false)
function toggleExpanded(){setIsExpanded(!isExpanded)}
const { _id, iframeId, title, description, creator, publishedAt } = videos 
const { watchState, watchDispatch } = useWatchLator()
const {watchlatorItem} = watchState
const isInWatchlator = findInArray(_id, watchlatorItem)
const { playlistState,playlistDispatch } = usePlaylist()
const { likeState, likeDispatch } = useLike()
const { likeItem } = likeState
    
const watchHandler = ( videos , _id) => {
    if (isInWatchlator) {
        watchDispatch({
        type: "REMOVE-TO-WATCH-LATOR", payload: _id
        })    
    } else {
        watchDispatch({
        type: "SAVE-TO-WATCH-LATOR",payload: videos
        })
    }
} 

const isInLike = findInArray(_id , likeItem)
    const likeHandler = (videos , _id) => {
        if (isInLike) {
        likeDispatch({
            type: "REMOVE-TO-LIKE",
            payload : _id
        })
        
    } else {
        likeDispatch({
            type: "ADD-TO-LIKE",
            payload : videos
        })
    }
}

const playlistHandler = () => {
    playlistDispatch({
        type: "OPEN-MODAL",
    })
    }

    const getModal = () => (
      playlistState.isModal ? <PlaylistModal Newvideo={videos} /> : <p></p>
    )
    
    



return (<>
    {getModal()}
    
<div key={videoId}>
    <div >
    <ReactPlayer url={`https://www.youtube.com/embed/${iframeId}`} controls={true} playing={true} className="video_player"
    width='--player-width' height="--player-height" />
    {/* <iframe src={`https://www.youtube.com/embed/${iframeId}`}allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>  */}
    </div>
        
<div className='all-text-content'>
            

        <h2>{title}</h2>
        <div className='videoshowview-middle-container'>
        <h3 className='margin0'>{creator}</h3>
        
        <div className='all-btn-container'>
        <div className='btn-container'>
            <span className='like-btn btn-hover' onClick={() => likeHandler(videos, _id)}>
            {isInLike ? <AiFillLike  className='bars-icon'/> :<AiOutlineLike className='bars-icon' /> }      
             &nbsp;65.4K
            </span>
            <div className="vertical-line"></div>
                    <span className='like-btn btn-hover'><AiOutlineDislike className='bars-icon' />
            </span>
        </div>
        
        <div className='onclick-btn-continer-main'>
            <span className='onclick-btn-container btn-hover' onClick={() => watchHandler(videos , _id )}>
            {isInWatchlator ?<MdDone className='bars-icon'/>:<MdOutlineWatchLater className='bars-icon'/>}  </span>
            <span className='onclick-btn-container btn-hover' onClick={()=>playlistHandler()}><MdPlaylistAdd  className='bars-icon'/></span>
        </div>
        </div>
    </div>
        <div className='video-discription'>
                <p className='margin0 Font'>{publishedAt} </p>
                <br />
            <p className='margin0 Font'>{isExpanded ? description : description.slice(0 , 100)+"..."}</p>
            <h4 className='margin0 Showmore-btn btn-hover' onClick={toggleExpanded}>{isExpanded ? "Show Less" : "Show More"}</h4>
</div>
</div>
</div>
</>)  
}
export {VideoshowView}