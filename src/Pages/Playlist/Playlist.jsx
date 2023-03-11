import "./Playlist.css"
import { usePlaylist } from "../../context"
import { Navbar, Sidebars } from "../../Components"
import { Playlistname } from "./Playlistname"
import  React , { useState } from "react"

function Playlist() {

    const [data , setData ] = useState([])
    const [firstVideo , setFirstVideo ] = useState([])
    const { playlistState } = usePlaylist()
    const { Playlistitem } = playlistState
    const [{ Videos }] = Playlistitem
    var NEW = []
    
    // const isInPlaylistVideo = Playlistitem.find((ele) => ele.ID === ID)
    function Callfunction(item) {
        
        console.log("hai")
        console.log(item.Videos)
        setData(item.Videos)
        setFirstVideo([item.Videos[0]])
       
        
    }

return (<>
<div>
<Navbar />
<Sidebars /> 
<div className="main-playlist-container">
<div className="playlist-container-Box">
    {Playlistitem.map((item) => (
        <div key={item.ID} className="playlist-content" >
                    <div >
                        <img src={`https://img.youtube.com/vi/AjWfY7SnMBI/maxresdefault.jpg `} alt="" className='playlist-tump-image' />
                        {/* <img src={`https://img.youtube.com/vi/${item.iframeId}/maxresdefault.jpg `} alt="" className='playlist-tump-image' /> */}
                    </div>
        <div className="detail-content">
                <h1>{item.name}</h1>
                <p className="playlist-font" >{item.Videos.length} video</p>
        </div>
            <button className="view-all-btn" onClick={()=>Callfunction(item)} >View All</button>
        </div>
     ))
    
            
            
}
            </div>
<div className="Playlist-item-container">
           
  {data.map((item) => (<Playlistname playitem={item} key={item._id} />))}
</div>

        </div>
    </div>
    </>)
}

export {Playlist}