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
   const  videodata  = [...videoState.video]
   const categorydata = CategoryFilter([...videodata] , filterState.Category)
//   console.log(videodata)
//   console.log(categorydata)
   
return (<>
   <div>
      <Navbar/>
      <Sidebars />
      <div className='video-grid-container'>
         <ButtonBar/>
            <div className='video-grid'>
               {categorydata.map((items) => (<VideoView video={items} key={items._id} /> ))}
            </div>
      </div>
  </div>      
</>)
}
export {Home}