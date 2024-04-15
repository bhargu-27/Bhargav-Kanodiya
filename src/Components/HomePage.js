import React from 'react';
import './../Styles/HomePage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
function HomePage() {
  return (
    <div className="homepage">
      <div className="profile">
        <img src="Bhargav.jpg" alt="Bhargav Kanodiya" />
        <h1>Bhargav Kanodiya</h1>
      </div>
      <div className="introduction">
        <p>
          Hello, I am Bhargav kanodiya. Grad student at Dalhousie University.I am studying masters of Applied Computer science.
        </p>
        <p>
          I have 1.8 years of work experience at <a href='https://www.linkedin.com/company/bacancy-technology/' style={{ color: '#36454F' }}>Bacancy Software LLP</a> at Ahmedabad. I am interested to work in JAVA, Nodejs, Reactjs, and cloud technologies like AWS, GCP, DevOps.
          I am currently living at Halifax, Canada. I am interested in working across Canada.
        </p>
        <p>
          I like to play Cricket and like to talk about cricket. In my freetime, I usually watch Sitcoms, and Movies. Feel free to conatct me on <a href='mailto:bjkanodiya42@gmail.com' style={{ color: '#36454F' }}>bjkanodiya42@gmail.com</a>
        </p>
        <div style={{ textAlign: 'center' }}>
          <p>Let's Connect on social media!</p>
        </div>
      </div>
      <div className="social-media-icons">
        <a href="https://www.linkedin.com/in/bhargavkanodiya42/">
          <FontAwesomeIcon icon={faLinkedin} style={{ color: '#333' }} />
        </a>
        <a href="https://github.com/bhargu-27">
          <FontAwesomeIcon icon={faGithub} style={{ color: '#333' }} />
        </a>
        <a href="https://www.facebook.com/bhargav.kanodiya.9/">
          <FontAwesomeIcon icon={faFacebook} style={{ color: '#333' }} />
        </a>
        <a href="https://twitter.com/Bhargavpatel_27">
          <FontAwesomeIcon icon={faTwitter} style={{ color: '#333' }} />
        </a>
        <a href="https://www.instagram.com/bhargav_patel_2742/">
          <FontAwesomeIcon icon={faInstagram} style={{ color: '#333' }} />
        </a>
      </div>
    </div>
  );
}

export default HomePage;