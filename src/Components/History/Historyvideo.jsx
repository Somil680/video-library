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
                <img src={`https://img.youtube.com/vi/${item.iframeId}/maxresdefault.jpg `} alt="" className='history-video-image' />
        </Link>
        <div className='history-video-detail'>
        <span className='content-detail'>
            <h5 className='margin0'>{item.title.slice(0, 29)}</h5>
            <br />
            <p className='margin0 history-font' >{item.creator}</p>
        </span>
        <span className='DotsVertical'>
            <HiDotsVertical className='bars-icon  '/>
        </span> 
        </div> 
   
    </div>
))}  
</div>    
</>)
}
export {History}