import React  from 'react';
import { useParams } from 'react-router-dom';
import { Navbar, Sidebars } from '../../Components';
import { VideoshowView } from "./VideoshowView"
import { useVideos ,usePlaylist } from '../../context/index';
import { RecommendVideo } from './RecommendVideo';
import { PlaylistModal } from '../../Components/index';

function Videoshow() {
     const { playlistState } = usePlaylist()


    const { videoId } = useParams()
    const { videoState } = useVideos()
    const videoShow = videoState.videos
    const videos = [videoShow.find((element) => element._id === videoId)];

    const videotag = videos.map((videostged) => videostged.tag)
    const tag = videotag.join()
    const tagVideos = videoShow.filter((element) => element.tag === tag);
    const Finalrecommendvideo = tagVideos.filter((ele) => ele._id !== videoId)
    const {PlaylistItem} = playlistState

  
  
return (<>
<div>
  <Navbar/>
  <Sidebars />
      
    
<div className='videoshowview-container'> 
    <div className='Videoplay-container'> 
        {videos.map((item) =>(<VideoshowView videos={item} videoId={videoId} key={item._id} />  ))   }
    </div>
    <div className="recommend-container">
        {Finalrecommendvideo.map((items) =>( <RecommendVideo videos={items} key={items._id} />))}
    </div>
</div>
        
</div>
</>)
}
export{Videoshow}