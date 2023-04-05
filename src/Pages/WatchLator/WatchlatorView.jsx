import React from 'react';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";

import { useVideoLibraryHook} from '../../context';

import "./Watchlater-item.scss"

function WatchlatorView({ watchVideos }) {

    const { Dispatch } = useVideoLibraryHook()
    const { _id, title, iframeId, publishedAt, creator } = watchVideos

    const styles = {
        header: "",
        watchItem: {
            container: "bfy__watchlater__watchItem-container",
            thumbnail: "bfy__watchlater__watchItem-thumbnail",
            details: "bfy__watchlater__watchItem-details",
            discription: "bfy__watchlater__watchItem-discription",
            deleteIcon: "bfy__watchlater__watchItem-deleteIcon",
            titleText1 : "bfy__watchlater__watchItem-titleText1",
            text: "bfy__watchlater__watchItem-text",
        }
    }
    const getWatchlaterView = () => (
        <div key={_id} className={styles.watchItem.container}>
            <div>
                <Link key={_id} to={`/watch=/${_id}`} className="Link">
                    <img src={`https://img.youtube.com/vi/${iframeId}/maxresdefault.jpg `} alt="" className={styles.watchItem.thumbnail} />
                </Link>
            </div>
            <div className={styles.watchItem.details}>
                <div className={styles.watchItem.discription}>
                    <h4 className={styles.watchItem.titleText1}>{title}</h4>
                    <p className={styles.watchItem.text}>{creator}</p>
                    <p className={styles.watchItem.text}>{publishedAt}</p>
                </div>
                <div className={styles.watchItem.deleteIcon}
                    onClick={() => Dispatch({ type: "REMOVE-TO-WATCH-LATOR", payload: _id })}> <MdDelete className='bars-icon  ' />
                </div>
            </div>
        </div>
    )
    return (
        <div>
            {getWatchlaterView()}
        </div>
    )
}
export { WatchlatorView }