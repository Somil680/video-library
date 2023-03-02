import React from 'react';
import "./WatchLator.css"
import { Navbar, Sidebars } from '../../Components';
import { useWatchLator ,useHistory } from '../../context';
import "./WatchLator.css"
import {WatchlatorView} from "./WatchlatorView"
import { WatchlatorFirst } from './WatchlatorFirst';

function WatchLator() {

    const { watchState } = useWatchLator()
    const { historyState } = useHistory()
    const {historyItem} = historyState
    const { watchlatorItem } = watchState
     console.log(historyItem)
    console.log(watchlatorItem.length)
      const FirstVideo =[ watchlatorItem[0] ]
    console.log(FirstVideo)
     
return(<>
    <Navbar />
    <Sidebars />
 
    <div className='watchlator-container'>

        <div className='first-video-show'  >
            {FirstVideo.map((item) => (<WatchlatorFirst Firstvideo={item}  Noofvideos={watchlatorItem } />))}
        </div>
        <div  className='watchlator-videos'>
             {watchlatorItem.map((item) => (<WatchlatorView watchVideos={item} key={item._id} />))}
        </div>
    </div>
</>)
}
export {WatchLator}