import React, { useState } from 'react';
import ReactPlayer from 'react-player/lazy'
import { AiOutlineLike, AiFillLike, AiOutlineDislike } from "react-icons/ai"
import { MdOutlineWatchLater, MdPlaylistAdd, MdDone } from 'react-icons/md'

import { useLike, usePlaylist, useWatchLator } from '../../context';
import { findInArray } from '../../Utilis/find';
import { PlaylistModal } from '../../Components/index';

import "./VideoViewShow.scss"

function VideoshowView({ videos, videoId }) {

    const [isExpanded, setIsExpanded] = useState(false)
    function toggleExpanded() { setIsExpanded(!isExpanded) }
    const { _id, iframeId, title, description, creator, publishedAt } = videos
    const { watchState, watchDispatch } = useWatchLator()
    const { watchlatorItem } = watchState
    const { playlistState, playlistDispatch } = usePlaylist()
    const { likeState, likeDispatch } = useLike()
    const { likeItem } = likeState

    const isInWatchlator = findInArray(_id, watchlatorItem)
    const watchHandler = (videos, _id) => {
        if (isInWatchlator) {
            watchDispatch({
                type: "REMOVE-TO-WATCH-LATOR", payload: _id
            })
        } else {
            watchDispatch({
                type: "SAVE-TO-WATCH-LATOR", payload: videos
            })
        }
    }
    const isInLike = findInArray(_id, likeItem)
    const likeHandler = (videos, _id) => {
        if (isInLike) {
            likeDispatch({
                type: "REMOVE-TO-LIKE",
                payload: _id
            })
        } else {
            likeDispatch({
                type: "ADD-TO-LIKE",
                payload: videos
            })
        }
    }
    const playlistHandler = () => {
        playlistDispatch({
            type: "OPEN-MODAL",
        })
    }
    const styles = {
        videoPlayer: {
            player: "bfy__videoshow__videoPlayer-player",
            title :"bfy__videoshow__videoPlayer-title",
            container: "bfy__videoshow__videoPlayer-container",
            btnContainer: "bfy__videoshow__videoPlayer-btnContainer",
            like_btn_box: "bfy__videoshow__videoPlayer-like_btn_box",
            like_btn: "bfy__videoshow__videoPlayer-like_btn",
            divider: "bfy__videoshow__videoPlayer-divider",
            button: "bfy__videoshow__videoPlayer-button",
            discription: "bfy__videoshow__videoPlayer-discription",
            showButton : "bfy__videoshow__videoPlayer-showButton"
        },
    }

    const getModal = () => (
        playlistState.isModal ? <PlaylistModal Newvideo={videos} /> : <p></p>
    )

    const getVideoplayer = () => (
        <div key={videoId}>
            <div>
                <ReactPlayer url={`https://www.youtube.com/embed/${iframeId}`} controls={true} playing={true} className={styles.videoPlayer.player} width='--player-width' height="--player-height" />
                {/* <iframe src={`https://www.youtube.com/embed/${iframeId}`} className={styles.videoPlayer.player} width='--player-width' height="--player-height"  allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
            </div>
            <div>
                <h2 className={styles.videoPlayer.title}>{title}</h2>
                <div className={styles.videoPlayer.container}>
                    <h3 className='margin0'>{creator}</h3>
                    <div className={styles.videoPlayer.btnContainer}>
                        <div className={styles.videoPlayer.like_btn_box}>
                            <span className={styles.videoPlayer.like_btn} onClick={() => likeHandler(videos, _id)}>
                                {isInLike ? <AiFillLike className='bars-icon' /> : <AiOutlineLike className='bars-icon' />}&nbsp;65.4K
                            </span>
                            <div className={styles.videoPlayer.divider}>
                            </div>
                            <span className={styles.videoPlayer.like_btn}><AiOutlineDislike className='bars-icon' />
                            </span>
                        </div>
                        <span className={styles.videoPlayer.button} onClick={() => watchHandler(videos, _id)}>
                            {isInWatchlator ? <MdDone className='bars-icon' /> : <MdOutlineWatchLater className='bars-icon' />}
                        </span>
                        <span className={styles.videoPlayer.button} onClick={() => playlistHandler()}><MdPlaylistAdd className='bars-icon' />
                        </span>
                    </div>
                </div>
                <div className={styles.videoPlayer.discription}>
                    <p className='margin0 Font'>{publishedAt} </p>
                    <br />
                    <p className='margin0 Font'>{isExpanded ? description : description.slice(0, 100) + "..."}</p>
                    <h4 className={styles.videoPlayer.showButton} onClick={toggleExpanded}>{isExpanded ? "Show Less" : "Show More"}</h4>
                </div>
            </div>
        </div>
    )

    return (<div>
        {getModal()}
        {getVideoplayer()}

    </div>)
}
export { VideoshowView }