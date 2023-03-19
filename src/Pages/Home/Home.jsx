import React from 'react';
import "./Home.scss"
import { ButtonBar, Navbar, Sidebars } from "../../Components/index";
import { useVideos , useFilter  } from "../../context/index";
import { CategoryFilter } from '../../Utilis/CategoyFilter';
import { VideoView } from './VideoView';

const Home = () => {
   const { videoState } = useVideos()
   const { filterState } =useFilter()
   const  videodata  = [...videoState.videos]
   const categorydata = CategoryFilter([...videodata] , filterState.Category)
   
   const style = {
      content: "bfy__home__content",
   }
   
   const getNavbar = () => (
     <Navbar/>
   )
   const getButtonBar = () => (
      <ButtonBar/>
   )
   const getSidebars = () => (
       <Sidebars />
   )
   const getContent = () => (
      <div className={style.content}>
      {/* // <div className='bfy__home__content'> */}
         {categorydata.map((items) => (<VideoView videos={items} key={items._id} /> ))}
      </div>
   )

return (<>
      {getNavbar()}
      {getButtonBar()}
      {getSidebars()}
      {getContent()}
</>)
}
export {Home}