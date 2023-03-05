import React from 'react';
 import "./WatchLator.css"
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { useWatchLator } from '../../context';
function WatchlatorView({ watchVideos }) {
    const { watchState, watchDispatch } = useWatchLator()
    const {watchlatorItem} = watchState
    const { _id, title, iframeId, publishedAt, creator } = watchVideos
    
return (<>
<div key={_id} className="watchlator-videos-container">
            
            <div className='video-image-watch'>
<Link key={_id} to={`/watch=/${_id}`} className="Link">
                    <img src={`https://i.ytimg.com/vi_webp/${iframeId}/mqdefault.webp `} alt="" className='video-image-watch' />
</Link>    
            </div>
                
            <div className='watchlatorvideos-detail'>   
            <div className='video-detail-watchlator'>
                    <h5 className='margin0'>{title.slice(0,30)}</h5>
                    <p className='margin0 font-watch'>{creator}</p>
                    <p className="margin0 font-watch">{publishedAt}</p>    
            </div> 
            <div className='delete'
                    onClick={()=> watchDispatch({type: "REMOVE-TO-WATCH-LATOR" ,payload: _id})}> <MdDelete className='bars-icon  '/>
            </div> 
            </div>    
</div>

    </>)
}
 export {WatchlatorView}