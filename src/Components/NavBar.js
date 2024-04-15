import React from 'react';
import './../Styles/NavBar.css'; 
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate=useNavigate();
  const openHome=()=>{
      navigate('/');
  }
  const openResume=()=>{
    const resumeUrl = './BhargavResume.pdf';
    window.open(resumeUrl, '_blank');
  }
  const openContact=()=>{
    navigate('/contact');
}
const openExperiences=()=>{
  navigate('/experience');
}
const openStudy=()=>{
  navigate('/education');
}
const openProjects=()=>{
  navigate('/projects');
}
  return (
    <nav className="navbar">
      <div className="navbar-left">
      <ul className="menu-list">
      <li className="menu-item" onClick={()=>openHome()}>Home</li>
      </ul>
      </div>
      <div className="navbar-right">
        <ul className="menu-list">
          <li className="menu-item" onClick={()=>openResume()}>Resume</li>
          <li className="menu-item" onClick={()=>openProjects()}>Projects</li>
          <li className="menu-item"onClick={()=>openExperiences()}>Experience</li>
          <li className='menu-item' onClick={()=>openStudy()}>Education</li>
          <li className="menu-item" onClick={()=>openContact()}>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
