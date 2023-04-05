import React from 'react';
import { HiDotsVertical } from "react-icons/hi";
import { Link } from "react-router-dom"

import "./liked-video.scss"

function Likedvideocard({Videos}) {

    const { _id, iframeId, title, creator, } = Videos

    const styles = {
        like_card: {
            container: "bfy__liked__like_card-container",
            thumbnail: "bfy__liked__like_card-thumbnail",
            content: "bfy__liked__like_card-content",
            detail: "bfy__liked__like_card-detail",
            title: "bfy__liked__like_card-title",
            text: "bfy__liked__like_card-text",
            icon:"bfy__liked__like_card-icon"
        }
    }
     const getLikedVideoCardView = () => (
        <div key={_id} className={styles.like_card.container}>
            <Link to={`/watch=/${_id}`} className="Link">
                <img src={`https://img.youtube.com/vi/${iframeId}/maxresdefault.jpg `} alt="" className={styles.like_card.thumbnail} />
            </Link>
            <div className={styles.like_card.content}>
                <div className={styles.like_card.detail}>
                    <h5 className={styles
                        .like_card.title}>{title}</h5>

                    <p className={styles.like_card.text}>{creator}</p>
                </div>
                <div >
                    <HiDotsVertical className={styles.like_card.icon} />
                </div>
            </div>

        </div>
    )

    return (
        <div>
{getLikedVideoCardView()}
        </div>
    )
}
export {Likedvideocard}