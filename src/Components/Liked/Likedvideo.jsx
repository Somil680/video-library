import React from 'react';

import { useLike } from '../../context';
import { Likedvideocard } from './LikedVideoCard';

import "./liked-video.scss"

function Liked() {

    const { likeState } = useLike()
    const { likeItem } = likeState

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