import { Routes,Route, Navigate} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import History from "./Components/History";

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
