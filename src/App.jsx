import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tuitions from "./pages/tuitions/Tuitions";
import Dance from "./pages/dance/Dance";
import Home from "./pages/home/Home";
import SchoolLandingPage from "./pages/schoolLandingPage/SchoolLandingPage";
import PrimarySchoolPage from "./pages/primarySchoolPage/PrimarySchoolPage";
import PlaySchoolPage from "./pages/playSchoolPage/PlaySchoolPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tuitions" element={<Tuitions />} />
        <Route path="/dance" element={<Dance />} />
        <Route path="/school-landingpage" element={<SchoolLandingPage />} />
        <Route path="/primary-school" element={<PrimarySchoolPage />} />
        <Route path="/play-school" element={<PlaySchoolPage />} />

      </Routes>
    </Router>
  );
}

export default App;
