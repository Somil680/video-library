import React from 'react';
import "./Sidebars.css"
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineWatchLater , MdPlaylistAdd ,MdOutlineVideoLibrary } from 'react-icons/md';
import { Link } from 'react-router-dom';


const Sidebars = () => {
    return (<>
        <div className='Sidebars'>

<Link to="/" className='Link'>
       <div className='bars-icon-div' >
              <span className='bars-icon'><AiOutlineHome /></span> 
              <p className='sidebars-p-tag' >Home</p>
       </div>
</Link> 
<Link to="/watchlator" className='Link'>
       <div className='bars-icon-div' >
              <span className='bars-icon'><MdOutlineWatchLater /> </span>
              <p className='sidebars-p-tag' >Watchlator</p>
        </div>
</Link >
<Link to="/playlist" className='Link'>         
       <div className='bars-icon-div' >
              <span className='bars-icon'><MdPlaylistAdd />
              </span> 
              <p className='sidebars-p-tag' >Playlist</p>
       </div>
</Link>
<Link to="/library" className='Link'>        
       <div className='bars-icon-div' >
              <span className='bars-icon'>
              <MdOutlineVideoLibrary /></span> 
              <p className='sidebars-p-tag' >Library</p>
        </div>
</Link>

</div>
</>)
}
export {Sidebars}