import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineHistory , AiOutlineLike} from "react-icons/ai"


import { useVideoLibraryHook } from '../../context';
import {History, Liked, Navbar, MenuBar} from "../../Components/index"

import "./Library.scss"

function Library() {
    const { State } = useVideoLibraryHook()
    const { historyItem , likeItem } = State

    const styles = {
        container: "bfy__library__container",
        content: {
           heading: "bfy__library__contnet__heading",
           text_color : "bfy__library__contnet__textcolor",
            historyContnet: {
                browse_link: "bfy__library__historycontnet__browse_link",
                hr_tag : "bfy__library__historycontnet__hr_tag"
            }
        }
    }

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
return (
<div>
 <Navbar/>
 <MenuBar/>
    <div className={styles.container}>
        {getHistoryView()}
        {getLikedVideo()}
    </div>
</div>
)
}
export {Library}