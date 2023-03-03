import React from 'react';
import "./Library.css"
import { Link } from 'react-router-dom';
import {History, Liked, Navbar, Sidebars} from "../../Components/index"
import { useHistory, useLike } from '../../context';
import {AiOutlineHistory , AiOutlineLike} from "react-icons/ai"

function Library() {
    const { historyState } = useHistory()
    const {historyItem} = historyState
    const { likeState } = useLike()
    const {likeItem} = likeState
return (<>
<Navbar />
<Sidebars />
    <div className="Library-container">
        <div>
            <span className='top-heading-icon' >
                <AiOutlineHistory className='bars-icon'/>
                <h3 className='margin'>History &nbsp; </h3>
                <p className='text-color'>{ historyItem.length}</p>
            </span>
            {historyItem.length === 0 ? <p className='text-color'>Videos that you watch will be shown here. <Link className='browse-link' to="/">Browse videos</Link></p> :
            <History/>
            }
            <hr className='hr-line' />
        </div>
        <div>
            <span className='top-heading-icon'>
                <AiOutlineLike className='bars-icon'/>
                <h3 className='margin'>Liked &nbsp;</h3>
                <p className='text-color'>{likeItem.length}</p>
            </span>
            {likeItem.length === 0 ? <p className='text-color'>This playlist have no videos </p> :
                <Liked />
            }
        </div>



    </div>
    </>)
}
export {Library}