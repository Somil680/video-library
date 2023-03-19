import React from 'react';
import "./Playlist.scss"
import { MdDelete } from "react-icons/md";
import { usePlaylist } from "../../context";
import { Link } from "react-router-dom";
function Playlistname({playitem}) {
    const { playlistDispatch } = usePlaylist()
    const { _id, title, iframeId, publishedAt, creator } = playitem

    const styles = {
        playlist_Item: {
            sub_contnet: "bfy__playlist__plyItem__sub_content",
            details: "bfy__playlist__plyItem__details",
            tumbnail : "bfy__playlist__plyItem__tumbnail"
        }
    }
    
    const getPlaylistCardView = () => (
        <div className={styles.playlist_Item.sub_contnet} >
            <div>
                <Link key={_id} to={`/watch=/${_id}`} className="Link">
                    <img src={`https://img.youtube.com/vi/${iframeId}/maxresdefault.jpg `} alt="" className={styles.playlist_Item.tumbnail} />
                </Link>
            </div>
            <div>
                <div className={styles.playlist_Item.details}>   
                    <div>
                        <h5 className='margin0'>{title.slice(0 , 30)}</h5>
                        <p className='margin0 font-playlist'>{creator}</p>
                        <p className="margin0 font-playlist">{publishedAt}</p>    
                    </div> 
                    <div className='delete'
                        onClick={()=> playlistDispatch({type: "REMOVE-TO-PLAYLIST" ,payload: _id})}> <MdDelete className='bars-icon  '/>
                    </div> 
                </div>
            </div>
        </div>
    )
return (<>
     {getPlaylistCardView()}
</>)
}
export {Playlistname}