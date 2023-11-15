import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import BioPage from './pages/bio/BioPage';
import Home from './pages/home/Home';
import ProjectsPage from './pages/projects/ProjectsPage';
import './App.css';

// Testing data
import projectData from './test/projects.json'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home projects={projectData.projects}/>} />
          <Route path="/bio" element={<BioPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </BrowserRouter>
      <div style={{
        marginBottom: '200px'
      }}>
        </div>      
      {/* <Footer /> */}
    </div>
  );
}

export default App;

