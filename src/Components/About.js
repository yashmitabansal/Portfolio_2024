import React from 'react';
import { NavLink } from 'react-router-dom';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './About.css';
import './Home.css';

const ResumeFileUrl = 'http://localhost:3000/About/resume.pdf';

const About = () => {
  const downLoafFile = (url) => {
    const fileName = url.split('/About').pop();
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download', fileName)
    document.body.appendChild(aTag)
    aTag.click();
    aTag.remove();
  }
  return (
    <div>
      <div className="mt-3  btn_div">
        <button className='homeBtn' onClick={() => {
          downLoafFile(ResumeFileUrl)
        }}>
          Download
        </button>
      </div>
    </div>
  )
}

export default About;