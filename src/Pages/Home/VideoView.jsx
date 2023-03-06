import React from 'react';
import "./Home.css"
import { HiDotsVertical } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useHistory } from '../../context';
import { findInArray } from '../../Utilis/find';
const VideoView = ({videos}) => {
const { _id, iframeId, title, creator, } = videos
const {historyState , historyDispatch } = useHistory()
const {historyItem} = historyState
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
    <div className="main-video-container" key={_id}>
        
        <Link to={`/watch=/${_id}`} className="Link" onClick={() => historyHandler()}>
     
        <img src={`https://img.youtube.com/vi/${iframeId}/maxresdefault.jpg `} alt="" className='video-image' />
        <div className='video-detail'>
        <span className='content-detail'>
                    <h4 className='margin0'>{title.slice(0 , 74)}</h4>
                    <br />
        <p className='margin0'>{creator}</p>
        </span>
        <span className='DotsVertical'>
            <HiDotsVertical className='bars-icon  '/>
        </span> 
        </div> 
    </Link>    
</div>

</>)
}
export {VideoView}