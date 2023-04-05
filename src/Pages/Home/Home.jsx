import React from 'react';

import { Navbar, MenuBar, Chips } from "../../Components/index";
import { useVideos , useVideoLibraryHook  } from "../../context/index";
import { CategoryFilter } from '../../Utilis/CategoyFilter';
import { VideoCard } from "./VideoCard";

import "./Home.scss"

const Home = () => {
   const { videoState } = useVideos()
   const { State } = useVideoLibraryHook()
   
   const  videodata  = [...videoState.videos]
   const categorydata = CategoryFilter([...videodata] , State.Category)
   
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
      <Chips/>
      <MenuBar />
      {getContentView()}
</div>)
}
export {Home}