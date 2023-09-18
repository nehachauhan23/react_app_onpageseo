import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Section from "./components/Section";
import Embeddable from "./components/Embeddable";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Section />} />
          <Route path="/embeddable" element={<Embeddable />} />
        </Routes>
    </>
  );
}

export default App;

