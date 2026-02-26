import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Banner } from "./components/Banner";
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectsPage } from './pages/ProjectsPage';

// Home Page Component
function HomePage() {
  return (
    <>
      <NavBar/>
      <Banner/>
      <Education/>
      <Certifications/>
      <Skills/>
      <Experience/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
