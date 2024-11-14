import { Typography } from '@mui/material';
import { faLinkedin, faFacebook, faGithub, faInstagram, faTwitter, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './../Styles/Contact.css'
const contacts = [
  { icon: faEnvelope, link: 'mailto:bjkanodiya42@gmail.com' },
  { icon: faLinkedin, link: 'https://www.linkedin.com/in/bhargavkanodiya42/' },
  { icon: faFacebook, link: 'https://www.facebook.com/bhargav.kanodiya.9/' },
  { icon: faGithub, link: 'https://github.com/bhargu-27' },
  { icon: faInstagram, link: 'https://www.instagram.com/bhargav_patel_2742/' },
  { icon: faTwitter, link: 'https://twitter.com/Bhargavpatel_27' },
  { icon: faStackOverflow, link: 'https://stackoverflow.com/users/16714029/bhargav-kanodiya' }
];

const Contact = () => {
  return (
    <div className="contact-page">
    <div className="contact-container">
      <Typography variant="h2" gutterBottom>Contact Me</Typography>
      <div className="contact-icons">
        {contacts.map((contact, index) => (
          <a key={index} href={contact.link} className="contact-icon">
            <FontAwesomeIcon icon={contact.icon} color="#333" />
          </a>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Contact;
