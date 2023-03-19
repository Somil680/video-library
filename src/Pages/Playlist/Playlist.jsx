import "./Playlist.scss"
import { usePlaylist } from "../../context"
import { Navbar, Sidebars } from "../../Components"
import { Playlistname } from "./Playlistname"
import  React , { useState } from "react"

function Playlist() {

    const [data , setData ] = useState([])
    const { playlistState } = usePlaylist()
    const { Playlistitem } = playlistState

    const styles = {
        header: "bfy__playlist__header" ,
        playlist_cardView: {
            content: "bfy__playlist__content",
            sub_Content: "bfy__playlist__sub_content",
            tumbnail: "bfy__playlist__tumbnail",
            details: "bfy__playlist__details",
            font: "bfy__playlist__font",
            button : "bfy__playlist__button"
        },
        playlist_Item: {
            content :  " bfy__playlist__plyItem__contnet"
        }
    }

    function Callfunction(item) {
    setData(item.Videos)
    }
    const getNavbar = () => (
    <Navbar/>
    )
   const getSidebars = () => (
    <Sidebars />
    )
    const getPlaylist = () => (
    <div className={styles.playlist_cardView.content}>
    {Playlistitem.map((item) => (
        <div key={item.ID} className={styles.playlist_cardView.sub_Content} >
            <div>
                <img src="https://img.youtube.com/vi/AjWfY7SnMBI/maxresdefault.jpg " className={styles.playlist_cardView.tumbnail} />
            </div>
            <div className={styles.playlist_cardView.details}>
                <h1>{item.name}</h1>
                <p className={styles.playlist_cardView.font} >{item.Videos.length} video</p>
            </div>
            <button className={styles.playlist_cardView.button} onClick={()=>Callfunction(item)} >View All</button>
        </div>))}
    </div>
    )

    const getPlaylistItem = () => (
    <div className={styles.playlist_Item.content}>        
       {data.map((item) => (<Playlistname playitem={item} key={item._id} />))}
    </div>
    )

return (<>
    {getNavbar()}
    {getSidebars()}
        <div className={styles.header}>
            {getPlaylist()}
            {getPlaylistItem()}  
        </div>
</>)
}

export {Playlist}