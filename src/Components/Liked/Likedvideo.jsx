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
                <img src={`https://img.youtube.com/vi/${item.iframeId}/maxresdefault.jpg `} alt="" className='like-video-image' />
                </Link>
        <div className='like-video-detail'>
        <span className='content-detail'>
            <h5 className='margin0'>{item.title.slice(0,29)}</h5>
            <p className='margin0 like-font'>{item.creator}</p>
        </span>
        <span className='DotsVertical'>
            <HiDotsVertical className='bars-icon  '/>
        </span> 
        </div> 
        
    </div>
))}  
</div>    
    </>)
}
export {Liked}