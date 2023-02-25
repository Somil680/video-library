import React from 'react';
 import "./WatchLator.css"
import { Link } from 'react-router-dom';
import { HiDotsVertical } from "react-icons/hi";

function WatchlatorView({watchVideos}) {
        const {_id , title , iframeId , publishedAt , creator } = watchVideos
    return (<>
        <div className="watchlator-videos">
<Link key={_id} to={`/watch=/${_id}`} className="Link">
    <div key={_id} className="watchlator-videos-container">
        <div className='video--recommend'>
            <img src={`https://i.ytimg.com/vi_webp/${iframeId}/mqdefault.webp `} alt="" className='video-image-recommend' />
            <div className='video-detail-watchlator'>
                    <h4 className='margin0'>{title}</h4>
                    <p className='margin0'>{creator}</p>
                    <p className="margin0">{publishedAt}</p>    
             
            </div> 
        </div>    
            <span className='DotsVertical'> 
                <HiDotsVertical className='bars-icon  '/>
            </span> 
    </div>
</Link>    
</div>
    </>)
}
 export {WatchlatorView}