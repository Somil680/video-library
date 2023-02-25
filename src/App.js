import "./App.css";

import { Home, Videoshow, WatchLator } from "./Pages";
import { Routes , Route } from "react-router-dom";


function App() {
 
  return (
    <div className="App" >
   
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch=/:videoId" element={<Videoshow />} />
        <Route path="/watchlator" element={<WatchLator />} />
        
    </Routes>
     
    </div>
  );
}

export default App;
