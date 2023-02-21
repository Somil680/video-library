import "./App.css";
import { Navbar, Sidebars } from "./Components";
import { useVideos } from "./context/videoContext";


function App() {
  const { videoState } = useVideos()
  const { video } = videoState

  console.log(video)

  return (
    <div className="App">
     <Navbar/>
     <Sidebars/>
      {video.map((items) => (
       
        <div key={items._id}>
          <p>{items.title}</p>
          {/* { var imgUrl = `https://i.ytimg.com/vi_webp/${items.iframeId}/maxresdefault.webp`} */}
        <img src={`https://i.ytimg.com/vi_webp/${items.iframeId}/mqdefault.webp `}alt="" />
        </div>
      ))}
    </div>
  );
}

export default App;
