import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/ohheemin" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/heemin-oh" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="mailto:heemin0617@gmail.com"><EmailIcon/></a>
      </div>
      <p>© {new Date().getFullYear()} Heemin Oh — built with React. Template by <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a>.</p>
    </footer>
  );
}

export default Footer;
