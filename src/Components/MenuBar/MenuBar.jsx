import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineWatchLater, MdPlaylistAdd, MdOutlineVideoLibrary } from 'react-icons/md';
import { Link } from 'react-router-dom';

import "./MenuBar.scss"

const MenuBar = () => {

 const styles = {
       container: "bfy__menuBar__container",
       Button: {
          container: "bfy__menuBar__Button-container",
          icon: "bfy__menuBar__Button-icon",
          title: "bfy__menuBar__Button-title",
       }
}
 const getMenubarView = () => (
       <div className={styles.container}>
              <Link to="/" className='Link'>
                     <div className={styles.Button.container} >
                            <div className={styles.Button.icon}><AiOutlineHome /></div>
                            <p className={styles.Button.title} >Home</p>
                     </div>
              </Link>
              <Link to="/watchlator" className='Link'>
                     <div className={styles.Button.container}>
                            <div className={styles.Button.icon}><MdOutlineWatchLater /></div>
                            <p className={styles.Button.title} >Watchlator</p>
                     </div>
              </Link >
              <Link to="/playlist" className='Link'>
                     <div className={styles.Button.container}>
                            <div className={styles.Button.icon}><MdPlaylistAdd />
                            </div>
                            <p className={styles.Button.title} >Playlist</p>
                     </div>
              </Link>
              <Link to="/library" className='Link'>
                     <div className={styles.Button.container}>
                            <div className={styles.Button.icon}>
                                   <MdOutlineVideoLibrary /></div>
                            <p className={styles.Button.title} >Library</p>
                     </div>
              </Link>
       </div>
 )

return (
       <div>
              {getMenubarView()}
       </div>
       )
}
export {MenuBar}