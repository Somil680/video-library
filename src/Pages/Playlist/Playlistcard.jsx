import React from 'react';
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

import { usePlaylist } from "../../context";

import "./Playlist-card.scss"

function Playlistcard({playitem}) {
    const { playlistDispatch } = usePlaylist()
    const { _id, title, iframeId, publishedAt, creator } = playitem

    const styles = {
        playItem: {
            discription: "bfy__playlist__playItem-discription",
            details: "bfy__playlist__playItem-details",
            thumbnail: "bfy__playlist__playItem-thumbnail",
            titleText: "bfy__playlist__playItem-titleText",
            text: "bfy__playlist__playItem-text",
            
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
                        <h5 className={styles.playItem.titleText}>{title}</h5>
                        <p className={styles.playItem.text}>{creator}</p>
                        <p className={styles.playItem.text}>{publishedAt}</p>    
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