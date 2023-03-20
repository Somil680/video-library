import React from 'react';

import { ButtonBar, Navbar, Sidebars } from "../../Components/index";
import { useVideos , useFilter  } from "../../context/index";
import { CategoryFilter } from '../../Utilis/CategoyFilter';
import { VideoCard } from "./VideoCard";

import "./Home.scss"

const Home = () => {
   const { videoState } = useVideos()
   const { filterState } =useFilter()
   const  videodata  = [...videoState.videos]
   const categorydata = CategoryFilter([...videodata] , filterState.Category)
   
   const style = {
      container : "",
      content: {
         container: "bfy__home__content_container"
      },
   }
   const getVideoCard = (videoCard) => (
      <VideoCard
         videos={videoCard}
         key={videoCard._id}
      />
   )
   const getContentView = () => (
      <div className={style.content.container}>
         {categorydata.map(getVideoCard)}
      </div>
   )

return (
   <div className={style.container}>
      <Navbar/>
      <ButtonBar/>
      <Sidebars />
      {getContentView()}
</div>)
}
export {Home}