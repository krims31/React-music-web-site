import "./App.css";
import LeftSideTop from "./components/SideLeftTop/LeftSideTop";
import Library from "./components/Library/Library";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";

function App() {
  return (
    <>
      <LeftSideTop />
      <Library />
      <AudioPlayer />
    </>
  );
}

export default App;
