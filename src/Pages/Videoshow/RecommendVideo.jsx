import React from 'react';
import "./Videoshow.scss"
import { findInArray } from '../../Utilis/find';
import { useHistory } from '../../context';
import { HiDotsVertical } from "react-icons/hi";
import { Link } from 'react-router-dom';

function RecommendVideo({ videos, videoId }) {
const {_id , title , iframeId , publishedAt , creator } = videos
const { historyState, historyDispatch } = useHistory()
const { historyItem } = historyState
    
const isInHistory  = findInArray(_id , historyItem)
function historyHandler() {
    if (!isInHistory) {  
        historyDispatch({
            type: "ADD-TO-HISTORY",
            payload : videos
        }) 
    }
}

const styles = {
        recommend_Video: {
        sub_content: "bfy__rec_video_sub_content",
        tumbnail: "bfy__rec_video_tumbnail",
        details : "bfy__rec_video_details",
        }
    }



const getRecommend_cardView = () => (
    <Link key={_id} to={`/watch=/${_id}`} className="Link" onClick={()=>historyHandler()}>
        <div key={_id} className={styles.recommend_Video.sub_content}>
            <img src={`https://img.youtube.com/vi/${iframeId}/maxresdefault.jpg `} alt="" className={styles.recommend_Video.tumbnail}/>
                <div>
                    <h4 className='margin10'>{title.slice(0, 40) + "..."}</h4>
                        <span className={styles.recommend_Video.details}>
                            <p className='margin10'>{creator}</p>
                            <p className="margin10">{publishedAt}</p>    
                        </span>
                </div> 
      
        </div>
    </Link>    
)

 return (<>
      {getRecommend_cardView()}

</>)
}
export {RecommendVideo}