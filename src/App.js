import "./App.css";

import { Home, Videoshow, WatchLator , Playlist } from "./Pages";
import { Routes , Route } from "react-router-dom";
import { useWatchLator  ,usePlaylist} from "./context";
import { Empty,  } from "./Components";
import { Library } from "./Pages/Library/Library";

function App() {
 const { watchState } = useWatchLator()
  const { watchlatorItem } = watchState
  const { playlistState } = usePlaylist()
  const { Playlistitem } = playlistState

  return (
    <div className="App" >
   
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch=/:videoId" element={<Videoshow />} />
        <Route path="/watchlator" element={watchlatorItem.length ===0 ? <Empty/> : <WatchLator /> } />
        <Route path="/playlist" element={Playlistitem.length === 0 ? <Empty/> :<Playlist />} />
        <Route path="/library" element={<Library/>} />
         </Routes>
     
    </div>
  )
}

export default App;
