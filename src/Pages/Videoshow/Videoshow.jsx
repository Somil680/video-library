import React from 'react';
import { useParams } from 'react-router-dom';
import { Navbar, Sidebars } from '../../Components';
import { VideoshowView } from "./VideoshowView"
import { useVideos } from '../../context/videoContext';
import { RecommendVideo } from './RecommendVideo';

function Videoshow() {
    const { videoId } = useParams()
    const { videoState } = useVideos()
    const videoShow = videoState.video
    const videosIdFind = [videoShow.find((element) => element._id === videoId)];
          console.log(videosIdFind)

return (<>
    <div>
      <Navbar />
      <Sidebars />
        <div className='videoshowview-container'> 
            <VideoshowView videos={videosIdFind} videoId={videoId} />
            <RecommendVideo videos={videosIdFind} videoId={videoId} />
        </div>
        
    </div>
</>)
}
export{Videoshow}