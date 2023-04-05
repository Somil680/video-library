import React from 'react';

import { Navbar, MenuBar} from '../../Components';
import { useVideoLibraryHook} from '../../context';
import {WatchlatorView} from "./WatchlatorView"
import { WatchlatorFirst } from './WatchlatorFirst';

import "./WatchLator.scss"
function WatchLator() {

    const { State } = useVideoLibraryHook()
    const { watchlatorItem } = State
    const FirstVideo = [watchlatorItem[0]]

    const styles = {
        container: "bfy__watchlater__container",
        watchlaterFirst: {
            container : "bfy__watchlater__watchlaterFirst-container",
        },
        watchlaterItem: {
            container : "bfy__watchlater__watchlaterItem-container"
        }
    }
    const getWatchFirstCard = (FirstCard) => (
        <WatchlatorFirst
            Firstvideo={FirstCard}
            key={FirstCard._id}
            Noofvideos={watchlatorItem} />
    )
    const getWatchItemCard = (ItemCard)=>(
        <WatchlatorView
            watchVideos={ItemCard}
            key={ItemCard._id} />
    )
    
    const getFirstVideoView = () => (
        <div className={styles.watchlaterFirst.container}  >
            {FirstVideo.map(getWatchFirstCard)}
        </div>
    )
    const getContentView = () => (
         <div  className={styles.watchlaterItem.container}>
             {watchlatorItem.map(getWatchItemCard)}
        </div>
    )

     
return (
<div>
    <Navbar />
    <MenuBar/>
    <div className={styles.container}>
        {getFirstVideoView()}
        {getContentView()} 
    </div>
</div>
)
}
export {WatchLator}