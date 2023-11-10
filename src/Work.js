import React, { useState, useEffect } from 'react';
import './App.css';

function Work() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/davsdev/repos')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div id="projetos">
      {projects.map((project, index) => (
        <div className="projeto-card" key={index}>
          <a href={project.html_url} target="_blank" rel="noopener noreferrer">
            <div className="projeto-imagem"></div>
            <div className="projeto-conteudo">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Work;