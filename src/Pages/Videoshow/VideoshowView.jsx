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

    const styles = {
        video_Player: {
            player :"bfy__video_Player__player",
            sub_content: "bfy__video_Player__sub__content",
            button_box: "bfy__video_Player__button_box",
            like_Button: {
                like_btn_box: "bfy__video_Player__like_btn_box",
                like_btn: "bfy__video_Player__like_btn",
                divider : "bfy__video_Player__divider"
            },
            button :"bfy__video_Player__button"

        },
        }


const getModal = () => (
    playlistState.isModal ? <PlaylistModal Newvideo={videos} /> : <p></p>
    )

const getVideoplayer = () => (
<div key={videoId}>
    <div>
            <ReactPlayer url={`https://www.youtube.com/embed/${iframeId}`} controls={true} playing={true} className={styles.video_Player.player} width='--player-width' height="--player-height" />
    </div>
    <div className='all-text-content'> 
        <h2>{title}</h2>
            <div className={styles.video_Player.sub_content}>
                <h3 className='margin0'>{creator}</h3>
                    <div className={styles.video_Player.button_box}>
                            <div className={styles.video_Player.like_Button.like_btn_box}>
                            <span className={styles.video_Player.like_Button.like_btn} onClick={() => likeHandler(videos, _id)}>
                            {isInLike ? <AiFillLike  className='bars-icon'/> :<AiOutlineLike className='bars-icon' />}&nbsp;65.4K
                            </span>
                            <div className={styles.video_Player.like_Button.divider}></div>
                            <span className={styles.video_Player.like_Button.like_btn}><AiOutlineDislike className='bars-icon'/>
                            </span>
                            </div>
                     
                            <span className={styles.video_Player.button} onClick={() => watchHandler(videos , _id )}>
                            {isInWatchlator ? <MdDone className='bars-icon' /> : <MdOutlineWatchLater className='bars-icon' />}
                            </span>
                            <span className={styles.video_Player.button} onClick={() => playlistHandler()}><MdPlaylistAdd className='bars-icon' />
                           </span>
                
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
)
      
return (<>
    {getModal()}
    {getVideoplayer()}

</>)  
}
export {VideoshowView}