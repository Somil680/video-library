import "./App.css";
import { Navbar, Sidebars } from "./Components";
import { Home } from "./Pages";



function App() {
 
  return (
    <div >
     <Navbar/>
     <Sidebars/>
     
      <Home/>
    </div>
  );
}

export default App;
