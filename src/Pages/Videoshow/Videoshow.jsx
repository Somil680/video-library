import React from 'react';
import { useParams } from 'react-router-dom';

import { Navbar, Sidebars } from '../../Components';
import { VideoshowView } from "./VideoshowView"
import { useVideos } from '../../context/index';
import { RecommendVideo } from './RecommendVideo';

import "./Videoshow.scss"
import { findInArray } from '../../Utilis/find';

function Videoshow() {

    const { videoId } = useParams()
    const { videoState } = useVideos()
    const videoShow = videoState.videos
    const videos = [findInArray(videoId , videoShow)];
    const videotag = videos.map((item) => item.tag)
    const tag = videotag.join()
    const tagVideos = videoShow.filter((element) => element.tag === tag);
    const Finalrecommendvideo = tagVideos.filter((element) => element._id !== videoId)

    const styles = {
        header: "bfy__videoshow__header",
        videoPlayer: {
            content: "bfy__videoshow__videoPlayer-content"
        },
        recommendVideo: {
            content: "bfy__videoshow__recommendVideo-content"
        }
    }
    
    const getVideoViewCard = (item) => (
        <VideoshowView
            videos={item}
            videoId={videoId}
            key={item._id} />
    )

    const getVideoPlayerView = () => (
        <div className={styles.videoPlayer.content}>
            {videos.map(getVideoViewCard)}
        </div>
    )

    const getRecommendedVideoCard = (item) => (
        <RecommendVideo
            videos={item}
            key={item._id} />
    )

    const getRecommendVideoView = () => (
        <div className={styles.recommendVideo.content}>
            {Finalrecommendvideo.map(getRecommendedVideoCard)}
        </div>
    )

    return (
        <div>
            <Navbar />
            <Sidebars />
            <div className={styles.header}>
                {getVideoPlayerView()}
                {getRecommendVideoView()}
            </div>
        </div>
    )
}
export { Videoshow }