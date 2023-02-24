import React from 'react';
import "./Videoshow.css"
import { useVideos } from '../../context/videoContext';
import { HiDotsVertical } from "react-icons/hi";
import { Link } from 'react-router-dom';

function RecommendVideo({ videos, videoId }) {

    const { videoState } = useVideos()
    const videoShow = videoState.video

    const videotag = videos.map((videostged) => videostged.tag)
    const tag = videotag.join()
    const tagVideos = videoShow.filter((element) => element.tag === tag);
    const Finalrecommendvideo = tagVideos.filter((ele) => ele._id !== videoId)

    


    return (<>
<div className="recommend-videos">
{Finalrecommendvideo.map((items) => (<>
<Link to={`/watch=/${items._id}`} className="Link">
<div key={items._id} className="recommend-videos-container">
        <div className='video--recommend'>
            <img src={`https://i.ytimg.com/vi_webp/${items.iframeId}/mqdefault.webp `} alt="" className='video-image-recommend' />
        <div className='video-detail-recommend'>
            <span className='content-detail-recommend'>
                <h4 className='margin0'>{items.title}</h4>
                <p className='margin0'>{items.creator}</p>
                <p className="margin0">353K views 1 day ago</p>    
            </span>
        </div> 
        </div>    
            <span className='DotsVertical'> 
            <HiDotsVertical className='bars-icon  '/>
          </span> 
</div>
    </Link>    
</>))}       
</div>

    </>)
}
export {RecommendVideo}