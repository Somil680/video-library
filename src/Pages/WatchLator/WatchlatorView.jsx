import React from 'react';
 import "./WatchLator.css"
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { useWatchLator } from '../../context';
function WatchlatorView({ watchVideos }) {
    const { watchState, watchDispatch } = useWatchLator()
    const {watchlatorItem} = watchState
        const {_id , title , iframeId , publishedAt , creator } = watchVideos
    return (<>
        <div className="watchlator-videos">
    <div key={_id} className="watchlator-videos-container">
<Link key={_id} to={`/watch=/${_id}`} className="Link">
        <div className='video--recommend'>
            <img src={`https://i.ytimg.com/vi_webp/${iframeId}/mqdefault.webp `} alt="" className='video-image-recommend' />
            <div className='video-detail-watchlator'>
                    <h4 className='margin0'>{title}</h4>
                    <p className='margin0'>{creator}</p>
                    <p className="margin0">{publishedAt}</p>    
             
            </div> 
        </div>    
        </Link>    
        <span className='delete'
         onClick={()=> watchDispatch({type: "REMOVE-TO-WATCH-LATOR" ,payload: _id})}> 
            <MdDelete className='bars-icon  '/>
        </span> 
    </div>
</div>
    </>)
}
 export {WatchlatorView}