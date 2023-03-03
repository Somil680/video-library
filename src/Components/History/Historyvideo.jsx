import "./Historyvideo.css"
import { useHistory } from "../../context"
import { Link } from "react-router-dom"
import { HiDotsVertical } from "react-icons/hi";

function History() {

    const { historyState } = useHistory()
    const {historyItem} = historyState
    console.log(historyItem)
return (<>
<div className="main-history-body-container">
    {historyItem.map((item) => (
    <div key={item._id} className="history-video-container">
        <Link to={`/watch=/${item._id }`} className="Link">
        <img src={`https://i.ytimg.com/vi_webp/${item.iframeId}/mqdefault.webp `} alt="" className='history-video-image'/>
        <div className='video-detail'>
        <span className='content-detail'>
            <h4 className='margin0'>{item.title.slice(0,35)+"..."}</h4>
            <p className='margin0'>{item.creator}</p>
        </span>
        <span className='DotsVertical'>
            <HiDotsVertical className='bars-icon  '/>
        </span> 
        </div> 
        </Link>
    </div>
))}  
</div>    
</>)
}
export {History}