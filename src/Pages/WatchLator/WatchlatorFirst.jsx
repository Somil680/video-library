import React from 'react';
import "./WatchLator.css";
import { MdPlayArrow } from 'react-icons/md'
import { Link } from 'react-router-dom';
function WatchlatorFirst({Firstvideo , Noofvideos }) {
    const { _id, title, iframeId, publishedAt, creator } = Firstvideo
    const noofvideos = Noofvideos.length

     
return (<>
    <div className='first-tumbnail-show'>
        <div className='placeincenter'>
            
        <img src={`https://i.ytimg.com/vi_webp/${iframeId}/mqdefault.webp `} alt="" className='tump-image' />
      </div>

        
        <div className='placeincenter'>
            

        <h1>Watch Lator</h1>
        <p className=' textcolor'>{noofvideos} videos No views Updated today</p>
                <Link key={_id} to={`/watch=/${_id}`} className="Link">
            <span className='Play-btn'>
                <MdPlayArrow className='bars-icon' style={{color:"black" ,fontSize: "30px"}}/>
                <h3 className="margin0" style={{color:"black" }}> Play Now</h3>
            </span>
                </Link>
</div>

    </div>
    </>)
}
export {WatchlatorFirst}