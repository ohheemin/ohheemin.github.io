import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import avatar from '../assets/images/avatar.png';
import '../assets/styles/Main.scss';

// TODO: replace the LinkedIn "#" link below with your real profile URL.

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Heemin Oh" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/ohheemin" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/heemin-oh" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:heemin0617@gmail.com"><EmailIcon/></a>
          </div>
          <h1>Heemin Oh</h1>
          <p>Robotics &amp; Autonomous Driving Researcher</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/ohheemin" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/heemin-oh" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:heemin0617@gmail.com"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
