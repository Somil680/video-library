import React from 'react';
import "./Videoshow.css"

import { HiDotsVertical } from "react-icons/hi";
import { Link } from 'react-router-dom';

function RecommendVideo({ videos, videoId }) {
    const {_id , title , iframeId , publishedAt , creator } = videos

return (<>
<div className="recommend-videos">
<Link key={_id} to={`/watch=/${_id}`} className="Link">
    <div key={_id} className="recommend-videos-container">
        <div className='video--recommend'>
            <img src={`https://i.ytimg.com/vi_webp/${iframeId}/mqdefault.webp `} alt="" className='video-image-recommend' />
            <div className='video-detail-recommend'>
                <span className='content-detail-recommend'>
                    <h4 className='margin0'>{title.slice(0 , 40)+"..."}</h4>
                    <p className='margin0'>{creator}</p>
                    <p className="margin0">{publishedAt}</p>    
                </span>
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
export {RecommendVideo}