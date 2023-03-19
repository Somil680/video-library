import React from 'react';
import "./Videoshow.scss"
import { useParams } from 'react-router-dom';
import { Navbar, Sidebars } from '../../Components';
import { VideoshowView } from "./VideoshowView"
import { useVideos } from '../../context/index';
import { RecommendVideo } from './RecommendVideo';


function Videoshow() {

    const { videoId } = useParams()
    const { videoState } = useVideos()
    const videoShow = videoState.videos
    const videos = [videoShow.find((element) => element._id === videoId)];
    const videotag = videos.map((videostged) => videostged.tag)
    const tag = videotag.join()
    const tagVideos = videoShow.filter((element) => element.tag === tag);
    const Finalrecommendvideo = tagVideos.filter((ele) => ele._id !== videoId)

    const styles = {
        header: "bfy__videoplayer__header",
        video_Player: {
            content : "bfy__video_Player__content"
        },
        recommend_Video: {
            content : "bfy__rec_video_content"
        }
    }


    const getNavbar = () => (
    <Navbar/>
    ) 
   const getSidebars = () => (
    <Sidebars />
    )
    const getVideoPlayer = () => (
    <div className={styles.video_Player.content}> 
        {videos.map((item) =>(<VideoshowView videos={item} videoId={videoId} key={item._id} />  ))}
    </div> 
    )
    const getRecommendVideos = () => (
    <div className={styles.recommend_Video.content}>
        {Finalrecommendvideo.map((items) => (<RecommendVideo videos={items} key={items._id} />))}
    </div>
    )

return (<>
  {getNavbar()}
  {getSidebars()}
    <div className={styles.header}> 
        {getVideoPlayer()}
        {getRecommendVideos()}
    </div>
</>)
}
export{Videoshow}