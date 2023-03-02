import "./App.css";

import { Home, Videoshow, WatchLator } from "./Pages";
import { Routes , Route } from "react-router-dom";
import { useWatchLator } from "./context";
import { Empty, PlaylistModal, UnderConstruction } from "./Components";

function App() {
 const { watchState } = useWatchLator()
    const { watchlatorItem } = watchState
    console.log( watchlatorItem.length)
  return (
    <div className="App" >
   
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch=/:videoId" element={<Videoshow />} />
        <Route path="/watchlator" element={
           watchlatorItem.length ===0 ? <Empty/> : <WatchLator /> 
        } />
        <Route path="/playlist" element={<PlaylistModal/>} />
        <Route path="/library" element={<UnderConstruction/>} />
         </Routes>
     
    </div>
  );
}

export default App;
