import React, { useState , useCallback } from 'react';
import { usePlaylist } from '../../context';
import "./Playlistmodal.css"
function PlaylistModal( videos ) {
    // const {_id , iframeId , title , description , creator , publishedAt } = videos
 
    const { playlistDispatch } = usePlaylist()
    const [newPlaylist, setNewPlaylist] = useState([])
    const [name, setName] = useState('')
    const [isChecked, setIsChecked] = useState([])
     
const addnameofplaylist = (e) => {
    setName(e.target.value)
    };
    
// console.log(name)

const addplaylist = ()=>{
    setNewPlaylist([...newPlaylist, name]);
    setIsChecked([...isChecked, false])
    setName('')
} 
console.log("playlist",newPlaylist)


    const AdditeminPlaylist  = useCallback((index) => {
        setIsChecked((prevState) => {
            const newCheckedItems = [...prevState];
            newCheckedItems[index] = !newCheckedItems[index]; // toggle the checked state of the item at the specified index
            return newCheckedItems;
        });
    }, [setIsChecked]);
    console.log(isChecked)
    


return (<>
    <div className='main-container'>
        <div className='modal-container'>
            <h2>Save to ...</h2>
            <input type="text" onChange={addnameofplaylist}/>
            <button onClick={addplaylist}>Add</button>

{newPlaylist.map((item,index) => (
    <div key={index}  onClick={()=>AdditeminPlaylist(index)} checked={isChecked[index]} >
        <input type="checkbox" name="" value={item} id={`check-${index}`}  />
        <label htmlFor={`check-${index}`}>{item},{index}</label>
    </div>
               
  
))}
               

<button onClick={()=>playlistDispatch({type:"CLOSE-MODAL"  })}>cancel</button>
    </div>
</div>
</>)
}
export {PlaylistModal}