import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Home, Videoshow, WatchLator, Playlist , Library } from "./Pages";
import { useVideoLibraryHook } from "./context";
import { Empty, } from "./Components";

function App() {
  const { State } = useVideoLibraryHook()
  const { watchlatorItem } = State

  return (
    <div className="App" >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch=/:videoId" element={<Videoshow />} />
        <Route path="/watchlator" element={watchlatorItem.length === 0 ? <Empty /> : <WatchLator />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </div>
  )
}
export default App;
