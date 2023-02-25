import React from 'react';
import "./Home.css"
import { HiDotsVertical } from "react-icons/hi";
import { Link } from 'react-router-dom';

const VideoView = ({videos}) => {
 
    const { _id, iframeId, title, creator , } = videos
    

return (<>
<div className="Vedio-container" key={_id}>
    <Link to={`/watch=/${_id }`} className="Link">
        <img src={`https://i.ytimg.com/vi_webp/${iframeId}/mqdefault.webp `} alt="" className='video-image' />
        <div className='video-detail'>
        <span className='content-detail'>
        <h4 className='margin0'>{title}</h4>
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