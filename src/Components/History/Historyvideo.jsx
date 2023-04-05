import React from 'react';

import { useVideoLibraryHook } from "../../context"
import { Historyvideocard } from './Historyvideocard';

import "./history-video.scss"

function History() {

    const { State } = useVideoLibraryHook()
    const { historyItem } = State

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