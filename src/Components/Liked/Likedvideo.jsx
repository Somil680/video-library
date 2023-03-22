import React from 'react';
import { Link } from "react-router-dom"
import { HiDotsVertical } from "react-icons/hi";

import { useLike } from '../../context';

import "./Likedvideo.scss"

function Liked() {

    const { likeState } = useLike()
    const { likeItem } = likeState

    const styles = {
        container: "bfy__liked__container",
        likeCard: {
            container: "bfy__liked__likeCard-container",
            thumbnail: "bfy__liked__likeCard-thumbnail",
            content: "bfy__liked__likeCard-content",
            detail: "bfy__liked__likeCard-detail",
            title: "bfy__liked__likeCard-title",
            text: "bfy__liked__likeCard-text",
            icon:"bfy__liked__likeCard-icon"
        }
    }

    const getLikedVideoView = () => (
        <div className={styles.container}>
            {likeItem.map((item) => (
                <div key={item._id} className={styles.likeCard.container}>
                    <Link to={`/watch=/${item._id}`} className="Link">
                        <img src={`https://img.youtube.com/vi/${item.iframeId}/maxresdefault.jpg `} alt="" className={styles.likeCard.thumbnail} />
                    </Link>
                    <div className={styles.likeCard.content}>
                        <div className={styles.likeCard.detail}>
                            <h5 className={styles.likeCard.title}>{item.title}</h5>
                            <p className={styles.likeCard.text}>{item.creator}</p>
                        </div>
                        <div>
                            <HiDotsVertical className={styles.likeCard.icon} />
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )

    return (<div>
        {getLikedVideoView()}
    </div>)
}
export { Liked }