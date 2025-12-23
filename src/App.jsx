import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import MusicToggle from "./components/MusicToggle";
import Surprise from "./pages/Surprise";

function App() {
  return (
    <BrowserRouter>
      <MusicToggle />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/timeline" element={<Timeline />} />
  <Route path="/surprise" element={<Surprise />} />
</Routes>
    </BrowserRouter>
  );
}

export default App;
