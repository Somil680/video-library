import React from 'react';

import { useHistory } from "../../context"

import "./history-video.scss"
import { Historyvideocard } from './Historyvideocard';

function History() {

    const { historyState } = useHistory()
    const { historyItem } = historyState

    let ActualhistoryItem = historyItem.map((_, index, originalArray) => {
        return originalArray[originalArray.length - 1 - index];
    });

    const styles = {
        container: "bfy__history__container",
    }

    const getHistoryCardView = (historyVideo) => (
        <Historyvideocard
            Videos={historyVideo}
            key={historyVideo._id}
        />
    )

    const getHistoryVideoView = () => (
        <div className={styles.container}>
            {ActualhistoryItem.map(getHistoryCardView)}
        </div>
    )

    return (<div>
        {getHistoryVideoView()}
    </div>)
}
export { History }