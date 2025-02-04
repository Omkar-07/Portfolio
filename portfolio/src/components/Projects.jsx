
import React from 'react';

const Projects = () => (
  <section id="projects" className="container">
    <h2>Projects</h2>
    <div className="row">
      <div className="col-md-4">
        <div className="project-card card">
          <div className="card-body">
            <h5 className="card-title">HANDY: Media Player Controller</h5>
            <p className="card-text">
              A Python-based application that enables users to control media playback using hand gestures. 
              Implemented using MediaPipe, OpenCV, and NumPy for real-time hand-sign detection.
            </p>
            <a href="https://github.com/Omkar-07/Handy-The-Media-Player-Controller" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Visit
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="project-card card">
          <div className="card-body">
            <h5 className="card-title">Wall Breaker GUI Game</h5>
            <p className="card-text">
              A classic arcade-style game developed using Java AWT and Swing. Features increasing difficulty levels, 
              paddle movement controls, and score tracking.
            </p>
            <a href="https://github.com/Omkar-07/WALL-BREAKER-GUI-GAME" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Visit
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="project-card card">
          <div className="card-body">
            <h5 className="card-title">Property Manager</h5>
            <p className="card-text">
              A property management application built with Spring Boot, MySQL, and Thymeleaf. Allows users to 
              manage properties and tenants efficiently, with a responsive UI for seamless interaction.
            </p>
            <a href="https://github.com/Omkar-07/Spring-Boot-Project-Using-Thymleaf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Visit
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
