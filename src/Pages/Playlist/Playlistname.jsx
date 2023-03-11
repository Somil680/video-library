import { MdDelete } from "react-icons/md";
import { usePlaylist } from "../../context";
import { Link } from "react-router-dom";
function Playlistname({playitem}) {
    const { playlistDispatch } = usePlaylist()
    
    const { _id, title, iframeId, publishedAt, creator } = playitem
    
// console.log(playitem)
    return (<>
        <div className="playlist-container" >
            <div>
            <Link key={_id} to={`/watch=/${_id}`} className="Link">
                <img src={`https://img.youtube.com/vi/${iframeId}/maxresdefault.jpg `} alt="" className="playlist-image" />
            </Link>
            </div>
            <div>
                 <div className='playlist-detail'>   
            <div className='video-detail-detail'>
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
    </>)
}
export {Playlistname}