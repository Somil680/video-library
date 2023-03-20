import React from 'react';
import "./Playlist-card.scss"
import { MdDelete } from "react-icons/md";
import { usePlaylist } from "../../context";
import { Link } from "react-router-dom";
function Playlistcard({playitem}) {
    const { playlistDispatch } = usePlaylist()
    const { _id, title, iframeId, publishedAt, creator } = playitem

    const styles = {
        playItem: {
            discription: "bfy__playlist__playItem-discription",
            details: "bfy__playlist__playItem-details",
            thumbnail : "bfy__playlist__playItem-thumbnail"
        }
    }
    
    const getPlaylistCardView = () => (
        <div className={styles.playItem.discription} >
            <div>
                <Link key={_id} to={`/watch=/${_id}`} className="Link">
                    <img src={`https://img.youtube.com/vi/${iframeId}/maxresdefault.jpg `} alt="" className={styles.playItem.thumbnail} />
                </Link>
            </div>
            <div>
                <div className={styles.playItem.details}>   
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
export {Playlistcard}