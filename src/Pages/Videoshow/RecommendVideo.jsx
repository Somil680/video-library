import React from 'react';
import { Link } from 'react-router-dom';

import { findInArray } from '../../Utilis/find';
import { useHistory } from '../../context';

import "./RecommendVideo.scss"

function RecommendVideo({ videos }) {
    const { _id, title, iframeId, publishedAt, creator } = videos
    const { historyState, historyDispatch } = useHistory()
    const { historyItem } = historyState

    const isInHistory = findInArray(_id, historyItem)
    function historyHandler() {
        if (!isInHistory) {
            historyDispatch({
                type: "ADD-TO-HISTORY",
                payload: videos
            })
        }
    }

    const styles = {
        recommendVideo: {
            discription: "bfy__videoshow__recommendVideo-discription",
            thumbnail: "bfy__videoshow__recommendVideo-thumbnail",
            detail: "bfy__videoshow__recommendVideo-detail",
            title: "bfy__videoshow__recommendVideo-title",
            text: "bfy__videoshow__recommendVideo-text",
        }
    }



    const getRecommendedCardView = () => (
        <Link key={_id} to={`/watch=/${_id}`} className="Link" onClick={() => historyHandler()}>
            <div key={_id} className={styles.recommendVideo.discription}>
                <img src={`https://img.youtube.com/vi/${iframeId}/maxresdefault.jpg `} alt="" className={styles.recommendVideo.thumbnail} />
                <div>
                    <h4 className={styles.recommendVideo.title}>{title}</h4>
                    <span className={styles.recommendVideo.detail}>
                        <p className={styles.recommendVideo.text}>{creator}</p>
                        <p className={styles.recommendVideo.text}>{publishedAt}</p>
                    </span>
                </div>

            </div>
        </Link>
    )

    return (<>
        {getRecommendedCardView()}

    </>)
}
export { RecommendVideo }