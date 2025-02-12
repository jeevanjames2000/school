import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tuitions from "./pages/tuitions/Tuitions";
import Dance from "./pages/dance/Dance";
import Home from "./pages/home/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tuitions" element={<Tuitions />} />
        <Route path="/dance" element={<Dance />} />
      </Routes>
    </Router>
  );
}

export default App;
