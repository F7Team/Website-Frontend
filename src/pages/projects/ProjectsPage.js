import React, {useEffect, useState} from 'react';
// import AppNavBar from '../../components/appnavbar/js/AppNavBar';
// import image2 from './top-project-2.png'
import behanceLogo from './behance.svg'
import githubLogo from './github.svg'
import linkLogo from './link.svg'
import 'swiper/css';
import 'swiper/css/pagination';
import { useParams } from 'react-router-dom';


import './ProjectsPage.css';
// import ProjectSlider from '../../components/slider/ProjectSlider';
import ProjectSlider2 from '../../components/slider/ProjectSlider2';


function ProjectsPage() {

    const { projectId } = useParams();

    const [projects, setProjects] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://f7team.vercel.app/api/works/';

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setProjects(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, []);
  
  if(projects < 1){
    return null;
  }

  const selectedProject = projects.find(project => project.id === Number(projectId));
    
    return (
        <div className='Projects'>
            <TopProject project={selectedProject}/>
            <ProjectSlider2 projects={projects} />
            <div
            style={{
                height: '100px'
            }}
            ></div>
        </div>
    )
}

function TopProject({project}) {
    return (
        <div className='container'>

            <div className='project-page-top-section'>
                <div className='project-page-top-image'>
                    <img src={project.image} alt='' />
                </div>
                <div className='project-page-top-text'>
                    <div>
                        <p>{project.title}</p>
                        <p>{project.project_description}</p>
                    </div>
                    <div className='project-page-top-links'>
                    {project.behance !== 'nil' &&
                        <img src={behanceLogo} alt='project-behance' onClick={() => loadUrl(project.behance)} />
                    }

                    {project.github !== 'nil' &&
                        <img src={githubLogo} alt='project-github' onClick={() => loadUrl(project.github)} />
                    }

                    {project.website !== 'nil' &&
                        <img src={linkLogo} alt='project-weblink' onClick={() => loadUrl(project.website)} />
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}

function loadUrl(url) {
    window.open(url, '_blank');
}



export default ProjectsPage;