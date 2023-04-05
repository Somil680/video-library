import React from 'react';

import { useVideoLibraryHook } from '../../context';
import { Likedvideocard } from './LikedVideoCard';

import "./liked-video.scss"

function Liked() {

    const { State } = useVideoLibraryHook()
    const { likeItem } = State

    const styles = {
        container: "bfy__liked__container",
    }

    const getLikedVideoCard = (likedVideo) => (
        <Likedvideocard
            Videos={likedVideo}
            key={likedVideo._id}
        />
    )

    const getLikedVideoView = () => (
        <div className={styles.container}>
            {likeItem.map(getLikedVideoCard)}
        </div>
    )

    return (<div>
        {getLikedVideoView()}
    </div>)
}
export { Liked }