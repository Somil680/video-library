import React, { useState } from 'react';
import { usePlaylist } from '../../context';
import "./Playlistmodal.css"
function PlaylistModal( videos ) {
    // const {_id , iframeId , title , description , creator , publishedAt } = videos
 
    const { playlistDispatch } = usePlaylist()
    const [newPlaylist, setNewPlaylist] = useState([])
    const [name, setName] = useState("")
    const [isChecked, setIsChecked] = useState(true)
     
const addnameofplaylist = (e) => {
      setName(e.target.value)
    };
const addplaylist = ()=>{
    const names = [...newPlaylist, name];
    setNewPlaylist(names);
    console.log("playlist",newPlaylist)
    }

function AdditeminPlaylist() {
        // console.log("click", item)
        setIsChecked(!isChecked);
        console.log(isChecked)
    }
    // console.log(isChecked)





return (<>
    <div className='main-container'>
        <div className='modal-container'>
            <h2>Save to ...</h2>
            <input type="text" onChange={addnameofplaylist}/>
            <button onClick={addplaylist}>Add</button>

{newPlaylist.map((item , index , videos) => (
    <div key={index}  >

         {/* <input type="checkbox" name="" id="check" value={item}/> */}
        <p onClick={AdditeminPlaylist} >{item}</p>
        </div>
               
  
))}
               

<button onClick={()=>playlistDispatch({type:"CLOSE-MODAL"  })}>cancel</button>
    </div>
</div>
</>)
}
export {PlaylistModal}