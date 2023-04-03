import React from 'react';
import { HiDotsVertical } from "react-icons/hi";
import { Link } from "react-router-dom"

import "./history-video.scss"

function Historyvideocard({ Videos }) {

    const { _id, iframeId, title, creator, } = Videos

    const styles = {
        history_card: {
            container: "bfy__history__history_card-container",
            thumbnail: "bfy__history__history_card-thumbnail",
            content: "bfy__history__history_card-content",
            detail: "bfy__history__history_card-detail",
            title: "bfy__history__history_card-title",
            text: "bfy__history__history_card-text",
            icon: "bfy__history__history_card-icon",
        }
    }
    const getHistoryVideoCardView = () => (
        <div key={_id} className={styles.history_card.container}>
            <Link to={`/watch=/${_id}`} className="Link">
                <img src={`https://img.youtube.com/vi/${iframeId}/maxresdefault.jpg `} alt="" className={styles.history_card.thumbnail} />
            </Link>
            <div className={styles.history_card.content}>
                <div className={styles.history_card.detail}>
                    <h5 className={styles
                        .history_card.title}>{title}</h5>

                    <p className={styles.history_card.text}>{creator}</p>
                </div>
                <div >
                    <HiDotsVertical className={styles.history_card.icon} />
                </div>
            </div>

        </div>
    )
    return (
        <div>
            {getHistoryVideoCardView()}
        </div>
    )
}
export { Historyvideocard }