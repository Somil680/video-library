import React from 'react';
import "./Videoshow.scss"
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
                <img src={`https://img.youtube.com/vi/${iframeId}/maxresdefault.jpg `} alt="" className='video-image-recommend' />
                    <div className='video-detail-recommend'>
                            <h4 className='margin10'>{title.slice(0 , 40)+"..."}</h4>
                            <p className='margin10'>{creator}</p>
                            <p className="margin10">{publishedAt}</p>    
                    </div> 
            </div>    
        </div>
    </Link>    
</div>
</>)
}
export {RecommendVideo}