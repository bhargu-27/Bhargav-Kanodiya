import { Routes,Route, Navigate} from "react-router-dom";
import NavBar from "./Components/NavBar";
import HomePage from "./Components/HomePage";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import WorkExperience from "./Components/WorkExperience";
import Education from "./Components/Education"
function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/experience" element={<WorkExperience/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
