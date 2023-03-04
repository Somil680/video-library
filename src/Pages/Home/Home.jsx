import React from 'react';
import "./Home.css"
import { ButtonBar, Navbar, Sidebars } from "../../Components/index";
import { useVideos } from "../../context/videoContext";
import { VideoView } from './VideoView';
import { CategoryFilter } from '../../Utilis/CategoyFilter';
import { useFilter } from '../../context';
const Home = () => {
   const { videoState } = useVideos()
   const {filterState} =useFilter()
   const  videodata  = [...videoState.videos]
   const categorydata = CategoryFilter([...videodata] , filterState.Category)

return (<>
   <div>
      <Navbar/>
      <div className='video-grid-container'>
         <ButtonBar/>
            <div className='video-grid'>
               {categorydata.map((items) => (<VideoView videos={items} key={items._id} /> ))}
            </div>
      </div>
      <Sidebars />
  </div>      
</>)
}
export {Home}