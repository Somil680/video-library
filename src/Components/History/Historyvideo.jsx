import React from 'react';
import { HiDotsVertical } from "react-icons/hi";
import { Link } from "react-router-dom"

import { useHistory } from "../../context"

import "./Historyvideo.scss"

function History() {

    const { historyState } = useHistory()
    const { historyItem } = historyState

    let ActualhistoryItem = historyItem.map((_, index, originalArray) => {
        return originalArray[originalArray.length - 1 - index];
    });

    const styles = {
        container: "bfy__history__container",
        historyCard: {
            container: "bfy__history__historyCard-container",
            thumbnail: "bfy__history__historyCard-thumbnail",
            content: "bfy__history__historyCard-content",
            detail: "bfy__history__historyCard-detail",
            title: "bfy__history__historyCard-title",
            text: "bfy__history__historyCard-text",
            icon: "bfy__history__historyCard-icon",
        }
    }

    const getHistoryVideoView = () => (
        <div className={styles.container}>
            {ActualhistoryItem.map((item) => (
                <div key={item._id} className={styles.historyCard.container}>
                    <Link to={`/watch=/${item._id}`} className="Link">
                        <img src={`https://img.youtube.com/vi/${item.iframeId}/maxresdefault.jpg `} alt="" className={styles.historyCard.thumbnail} />
                    </Link>
                    <div className={styles.historyCard.content}>
                        <div className={styles.historyCard.detail}>
                            <h5 className={styles
                                .historyCard.title}>{item.title}</h5>

                            <p className={styles.historyCard.text}>{item.creator}</p>
                        </div>
                        <div >
                            <HiDotsVertical className={styles.historyCard.icon} />
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )

    return (<div>
        {getHistoryVideoView()}
    </div>)
}
export { History }