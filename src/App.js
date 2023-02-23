import "./App.css";

import { Home, Videoshow } from "./Pages";
import { Routes , Route } from "react-router-dom";


function App() {
 
  return (
    <div >
   
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch=/:videoId" element={<Videoshow/>}/>
    </Routes>
     
    </div>
  );
}

export default App;
