import React from 'react';
import "./Videoshow.css"
import ReactPlayer from 'react-player/lazy'
import { HiDotsVertical } from "react-icons/hi";
import { AiOutlineLike ,AiOutlineDislike } from "react-icons/ai"
import { useVideos } from '../../context/videoContext';
import { Link } from 'react-router-dom';

function VideoshowView({ videos, videoId }) {
    const { videoState } = useVideos()
    const videoShow = videoState.video

    const videotag = videos.map((videostged) => videostged.tag)
    const tag = videotag.join()
    const tagVideos = videoShow.filter((element) => element.tag === tag);
    const Finalrecommendvideo = tagVideos.filter((ele) => ele._id !== videoId)


return (<>
<div className='videoshowview-container'>
{/* ------------------------------------- */}
<div className='Videoplay-container'> 
{videos.map((videos, videoId) => {
return (<div key={videoId}>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${videos.iframeId}`} controls={true} playing={true} />
            <h2>{videos.title}</h2>
                <div className='videoshowview-middle-container'>
                    <h3>{videos.creator}</h3>
                        <div className='btn-container'>
                            <span className='like-btn'><AiOutlineLike className='bars-icon' />&nbsp;65.4K</span>
                            <div className="vertical-line"></div>
                            <span className='like-btn'><AiOutlineDislike className='bars-icon' /></span>
                        </div>
                </div>
                <div className='video-discription'>
                    <p className='margin0 Font'>999K views 1 months ago </p>
                    <p className='margin0 Font'>{videos.description}</p>
                </div>
</div>)})}
</div>  
{/*---------------------------------------*/}

<div className="recommend-videos">
{Finalrecommendvideo.map((items) => (<>
<Link to={`/watch=/${items._id}`} className="Link">
<div key={items._id} className="recommend-videos-container">
        <div className='video-image-recommend'>
            <img src={`https://i.ytimg.com/vi_webp/${items.iframeId}/mqdefault.webp `} alt="" className='video-image-recommend' />
        </div>    
        <div className='video-detail-recommend'>
            <span className='content-detail-recommend'>
                <h4 className='margin0'>{items.title}</h4>
                <p className='margin0'>{items.creator}</p>
            </span>
        </div> 
            <span className='DotsVertical'> 
            <HiDotsVertical className='bars-icon  '/>
          </span> 
</div>
    </Link>    
</>))}       
</div>



      
</div>
</>)  
}
export {VideoshowView}
