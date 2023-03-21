import React from 'react';

import { MdPlayArrow } from 'react-icons/md'
import { Link } from 'react-router-dom';

import "./Watchlater-first.scss";

function WatchlatorFirst({ Firstvideo, Noofvideos }) {
    const { _id, iframeId } = Firstvideo
    const noofvideos = Noofvideos.length

    const styles = {
        watchFirst: {
            container: "bfy__watchlater__watchFirst-container",
            content: "bfy__watchlater__watchFirst-content",
            thumbnail: "bfy__watchlater__watchFirst-thumbnail",
            button: "bfy__watchlater__watchFirst-button",
            textColor: "bfy__watchlater__watchFirst-textColor",
            icons: "bfy__watchlater__watchFirst-icons",
            btnText: "bfy__watchlater__watchFirst-btnText"
        }
    }

    const getWatchlaterFirstView = () => (
        <div className={styles.watchFirst.container}>
            <div className={styles.watchFirst.content}>
                <img src={`https://img.youtube.com/vi/${iframeId}/maxresdefault.jpg `} alt="" className={styles.watchFirst.thumbnail} />
                <h1>Watch Lator</h1>
                <p className={styles.watchFirst.textColor}>{noofvideos} videos No views Updated today</p>
                <Link key={_id} to={`/watch=/${_id}`} className="Link">
                    <span className={styles.watchFirst.button}>

                        <MdPlayArrow className={styles.watchFirst.icons} />

                        <p className={styles.watchFirst.btnText}>Play Now</p>
                    </span>
                </Link>
            </div>
        </div>

    )

return (
    <div>
        {getWatchlaterFirstView()}
    </div>
    )
}
export { WatchlatorFirst }