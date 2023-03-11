import React , {useState} from 'react';
import { usePlaylist } from '../../context';
import {v4 as uuid} from "uuid"
import "./Playlistmodal.css"

function PlaylistModal( videos ) {
    const {playlistState , playlistDispatch } = usePlaylist()
    const { Playlistitem } = playlistState
    const [name ,setName] = useState('')
    const { Newvideo} = videos
    console.log(Playlistitem)

// YE FUNCTION PLAYLIST KE NAAM KO SET KARTA HAI !
const addNameInPlaylist = (e) => {
        setName(e.target.value)
}
// YE FUNCTION ADD BUTTON PE CLICK HONE SE TIGGERED HOTA AUR SAARA DATA PLAYLIST ME SAVE HOJATA HAI !
const addInPlaylist = () => {
    playlistDispatch({
        type: "ADD-ITEM",
        payload: { ID: uuid(), name, Videos: [Newvideo] } 
    })
}
// YE FUNCTION EK NAYI VIDEO KO EXISTING PLAYLIST ME DALTA HAI ! 
const addMoreInPlaylist = (index, item) => {
    const isInPlaylist = playlistState.Playlistitem.find((ele)=> ele.ID === item.ID)
        if (isInPlaylist) {
            playlistDispatch({
                type: "ADD-MORE-ITEM",
                payload:{Videos: [Newvideo]},
                index : index
            })
        } else {
            console.log("nahi hai ")
        }       
}
return (<>

    <div className='modal-container'>
     <div className='input-container'>       
    <h2>Save to ...</h2>
    <input type="text" className='input-field' placeholder='Create a new playlist' onChange={(e) => addNameInPlaylist(e)} />
        <button className='inpur-btn' onClick={() => addInPlaylist()}>Create</button>
        </div>
{Playlistitem.map(( item , index) => (
        <div key={item.ID} className="Input-check-box">
            <label htmlFor={`"check"${item.ID}` }   onClick={()=>addMoreInPlaylist(index , item)} >
                <input type="checkbox" name="" id={`"check"${item.ID}`} />
                {item.name}
            </label>
       </div>
))
}
    <button className='cencel-btn' onClick={()=>playlistDispatch({type:"CLOSE-MODAL"  })}>cancel</button>
    </div>

</>)
}
export {PlaylistModal} 