import React from 'react';
import "./Videoshow.css"
import { findInArray } from '../../Utilis/find';
import { useHistory } from '../../context';
import { HiDotsVertical } from "react-icons/hi";
import { Link } from 'react-router-dom';

function RecommendVideo({ videos, videoId }) {
const {_id , title , iframeId , publishedAt , creator } = videos
const { historyState, historyDispatch } = useHistory()
const { historyItem } = historyState
    
const isInHistory  = findInArray(_id , historyItem)
function historyHandler() {
    if (!isInHistory) {  
        historyDispatch({
            type: "ADD-TO-HISTORY",
            payload : videos
        }) 
    }
}


return (<>
<div className="recommend-videos">
<Link key={_id} to={`/watch=/${_id}`} className="Link" onClick={()=>historyHandler()}>
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