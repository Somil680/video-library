import React from 'react';
import { Link } from 'react-router-dom';

import { HiDotsVertical } from "react-icons/hi";
import { useVideoLibraryHook } from '../../context';
import { findInArray } from '../../Utilis/find';

import "./Video-card.scss"

const VideoCard = ({ videos }) => {
    
    const styles = {
        cardView: {
            container: " bfy__home__cardView__container ",
            tumbnail: "bfy__home__cardView__tumbnail",
            content: {
                full_Cont: "bfy__home__cardView__content__fullContent",
                sub_Cont: "bfy__home__cardView__content__subContent",
                icon_Cont:  "bfy__home__cardView__content__iconContent",
            }, 
        }
    }

const { _id, iframeId, title, creator, } = videos
const {State , Dispatch } = useVideoLibraryHook()
    const { historyItem } = State
const isInHistory  = findInArray(_id , historyItem)
function historyHandler() {
    if (!isInHistory) {  
        Dispatch({
            type: "ADD-TO-HISTORY",
            payload : videos
        }) 
    }
}
    const getVideoView = () => (
    <div className={styles.cardView.container} key={_id}>
        <Link to={`/watch=/${_id}`} className="Link" onClick={() => historyHandler()}>
            <img src={`https://img.youtube.com/vi/${iframeId}/maxresdefault.jpg `} alt="" className={styles.cardView.tumbnail} />
            <div className={styles.cardView.content.full_Cont}>
                <span className={styles.cardView.content.sub_Cont}>
                    <h4 className='margin0'>{title.slice(0 , 74)}</h4>
                    <p className='margin0 home-font'>{creator}</p>
                </span>
                    <span className={styles.cardView.content.icon_Cont}>
                    <HiDotsVertical className='bars-icon  '/>
                </span> 
            </div> 
        </Link>    
    </div> 
    )         
return (<>
    {getVideoView ()}
</>)
}
export {VideoCard}