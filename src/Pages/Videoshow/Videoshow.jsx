import React from 'react';

import { useParams } from 'react-router-dom';
import { Navbar, Sidebars } from '../../Components';
import { VideoshowView } from "./VideoshowView"
import { useVideos } from '../../context/index';
import { RecommendVideo } from './RecommendVideo';

import "./Videoshow.scss"
function Videoshow() {

    const { videoId } = useParams()
    const { videoState } = useVideos()
    const videoShow = videoState.videos
    const videos = [videoShow.find((element) => element._id === videoId)];
    const videotag = videos.map((tags) => tags.tag)
    const tag = videotag.join()
    const tagVideos = videoShow.filter((element) => element.tag === tag);
    const Finalrecommendvideo = tagVideos.filter((ele) => ele._id !== videoId)

    const styles = {
        header: "bfy__videoshow__header",
        videoPlayer: {
            content: "bfy__videoshow__videoPlayer-content"
        },
        recommendVideo: {
            content: "bfy__videoshow__recommendVideo-content"
        }
    }


    const getVideoPlayerView = () => (
        <div className={styles.videoPlayer.content}>
            {videos.map((item) => (<VideoshowView videos={item} videoId={videoId} key={item._id} />))}
        </div>
    )
    const getRecommendVideoView = () => (
        <div className={styles.recommendVideo.content}>
            {Finalrecommendvideo.map((items) => (<RecommendVideo videos={items} key={items._id} />))}
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