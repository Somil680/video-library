import React from 'react';
import { useLike } from '../../context';
import "./Likedvideo.css"
import { Link } from "react-router-dom"
import { HiDotsVertical } from "react-icons/hi";
function Liked() {
    const { likeState } = useLike()
    const {likeItem} = likeState
return (<>
    <div className="main-like-body-container">
    {likeItem.map((item) => (
    <div key={item._id} className="like-video-container">
        <Link to={`/watch=/${item._id }`} className="Link">
        <img src={`https://i.ytimg.com/vi_webp/${item.iframeId}/mqdefault.webp `} alt="" className='like-video-image'/>
        <div className='video-detail'>
        <span className='content-detail'>
            <h4 className='margin0'>{item.title.slice(0,35)+"..."}</h4>
            <p className='margin0'>{item.creator}</p>
        </span>
        <span className='DotsVertical'>
            <HiDotsVertical className='bars-icon  '/>
        </span> 
        </div> 
        </Link>
    </div>
))}  
</div>    
    </>)
}
export {Liked}