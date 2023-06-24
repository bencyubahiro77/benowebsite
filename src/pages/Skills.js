import React from 'react';
import { FaHtml5, FaCss3Alt, FaFigma, FaReact, FaNodeJs, FaJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

const Skills = () => {
  const percentages = [70, 70, 70, 60, 55, 60];

  return (
    <body>
      {/* <div className="contimg">
        <div className="contact2">
          <h1>My Skills</h1>
        </div>
      </div> */}

      <div className="card-container">
        <div className="card">
           <button className="card-button" style={{ '--border-progress': `${percentages[0]}%` }}>
            <FaHtml5 className="card-icon" style={{ color: '#E34C26' }} />
          </button>
          <div className="card-content">
            <h2>HTML</h2>
          </div>
        </div>

        <div className="card">
          <button className="card-button" style={{ '--border-progress': `${percentages[1]}%` }}>
            <FaCss3Alt className="card-icon" style={{ color: '#2965F1' }} />
          </button>
          <div className="card-content">
            <h2>CSS</h2>
          </div>
        </div>

        <div className="card">
          <button className="card-button" style={{ '--border-progress': `${percentages[3]}%` }}>
            <FaJs className="card-icon" style={{ color: 'yellow' }} />
          </button>
          <div className="card-content">
            <h2>JavaScript</h2>
          </div>
        </div>

        <div className="card">
          <button className="card-button" style={{ '--border-progress': `${percentages[2]}%` }}>
            <FaFigma className="card-icon" style={{ color: '#F24E1E' }} />
          </button>
          <div className="card-content">
            <h2>Figma</h2>
          </div>
        </div>

        <div className="card">
          <button className="card-button" style={{ '--border-progress': `${percentages[3]}%` }}>
            <FaReact className="card-icon" style={{ color: '#61DAFB' }} />
          </button>
          <div className="card-content">
            <h2>React</h2>
          </div>
        </div>

        <div className="card">
          <button className="card-button" style={{ '--border-progress': `${percentages[4]}%` }}>
            <FaNodeJs className="card-icon" style={{ color: '#339933' }} />
          </button>
          <div className="card-content">
            <h2>Node.js</h2>
          </div>
        </div>

        <div className="card">
          <button className="card-button" style={{ '--border-progress': `${percentages[5]}%` }}>
            <SiMongodb className="card-icon" style={{ color: '#47A248' }} />
          </button>
          <div className="card-content">
            <h2>MongoDB</h2>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Skills;
