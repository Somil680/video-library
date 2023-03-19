import React from 'react';
import "./Library.scss"
import { Link } from 'react-router-dom';
import {History, Liked, Navbar, Sidebars} from "../../Components/index"
import { useHistory, useLike } from '../../context';
import {AiOutlineHistory , AiOutlineLike} from "react-icons/ai"

function Library() {
    const { historyState } = useHistory()
    const { historyItem } = historyState
    const { likeState } = useLike()
    const { likeItem } = likeState

    const styles = {
        header: "bfy__library__header",
        content: {
           heading: "bfy__library__contnet__heading",
           text_color : "bfy__library__contnet__textcolor",
            historyContnet: {
                browse_link: "bfy__library__historycontnet__browse_link",
                hr_tag : "bfy__library__historycontnet__hr_tag"
            }
        }
    }

    const getNavbar = () => (
    <Navbar/>
    ) 
   const getSidebars = () => (
    <Sidebars />
    )
    const getHistoryView = () => (
    <div>
        <span className={styles.content.heading} >
            <AiOutlineHistory className='bars-icon'/>
            <h3 className='margin'>History &nbsp; </h3>
            <p className={styles.content.text_color}>{ historyItem.length}</p>
        </span>
            {historyItem.length === 0 ? <p className={styles.content.text_color}>Videos that you watch will be shown here. <Link className={styles.content.historyContnet.browse_link} to="/">Browse videos</Link></p> :
            <History/>}
            <hr className={styles.content.historyContnet.hr_tag } />
    </div>
    )
    const getLikedVideo = () => (
    <div>
        <span className={styles.content.heading}>
            <AiOutlineLike className='bars-icon'/>
            <h3 className='margin'>Liked &nbsp;</h3>
            <p className={styles.content.text_color}>{likeItem.length}</p>
        </span>
        {likeItem.length === 0 ? <p className={styles.content.text_color}>This playlist have no videos </p> :
        <Liked />}
    </div>
    )
return (<>
    {getNavbar()}
    {getSidebars()}
    <div className={styles.header}>
        {getHistoryView()}
        {getLikedVideo()}
    </div>
</>)
}
export {Library}