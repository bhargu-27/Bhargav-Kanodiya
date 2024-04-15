import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Collapse,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import './../Styles/Projects.css';

const Projects = () => {
  const projectsData = [
    // {
    //   id: 1,
    //   title: 'FinTastic - Your personal finance tracker',
    //   link: 'https://fintastic-grp-14.netlify.app/',
    //   timeline: 'Jan 2024 - Apr 2024',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //   technologies: ['React', 'JavaScript', 'CSS'],
    // },
    {
      id: 2,
      title: 'AccoMatch',
      GitHub: 'https://github.com/bhargu-27/accomatch',
      timeline: 'May 2023 - Aug 2023',
      descriptionPoints: [ `Led the team and developed a web application focused on facilitating accommodation search for individuals seeking 
      roommates or properties available for lease/rent with automated deployment using CI/CD.`,`Employed various design patterns and adhered to SOLID principles, ensuring a robust and maintainable codebase 
      following the Model-View-Controller (MVC) architecture.`,`Executed comprehensive testing with Mockito and Junit by following Test-driven development and achieved 86% 
      code coverage.`],
      technologies: ['React.Js', 'Java', 'MySQL','Springboot','Websocket'],
    },
    {
      id: 3,
      title: 'Table reservation App',
      GitHub: 'https://github.com/bhargu-27/Table-Reservation-App-Serverless',
      timeline: 'Sep 2023 - Dec 2023',
      descriptionPoints: [`Engineered a serverless table reservation application by using multiple cloud services, seamlessly integrating 
      Amazon Web Services (AWS) and Google Cloud Platform (GCP).`,`Utilized AWS services strategically including Lambda functions, DynamoDB, S3, Lex, SQS, and SNS, alongside 
      GCP services such as Cloud Functions, Looker Studio, and Fire store to reduce API delay by 60%.`,`Oversaw the GitLab board to facilitate task management and ensure timely delivery of effective solutions according 
      to deadlines`],
      technologies: ['React.Js', 'Node.Js', 'DynamoDB','Firestore','S3'],
    },
    {
      id: 4,
      title: 'Event Management App',
      GitHub: 'https://github.com/bhargu-27/EventAppCloud',
      timeline: 'Sep 2023 - Dec 2023',
      descriptionPoints: [`Crafted an application allowing users to perform event-related actions, including event creation and management, participation, and setting event reminders.`,`Designed and implemented stateless APIs dedicated to event management, ensuring efficient and scalable handling of event-related functionalities. Integrated a sophisticated email notification system utilizing AWS Simple Queue Service (SQS) and Simple Notification Service (SNS).`],
      technologies: ['React.Js', 'Node.Js','Lambda','DynamoDB','SNS','SQS','CloudFormation','S3'],
    },
    {
      id: 5,
      title: 'Crossify',
      liveUrl:'https://crossify.vercel.app/',
      GitHub: 'https://github.com/bhargu-27/Crossify',
      timeline: 'Oct 2020 - May 2021',
      descriptionPoints: [`Formulated and deployed Crossify, a cutting-edge web application enabling users to discover tailored clubs and events, resulting in a 40% boost in user retention.`,`Incorporated cutting-edge filtering mechanisms, resulting in a 30% increase in user engagement through refined search functionality.`,`Utilized socket.io for real-time notifications, boosting user interaction rates by 40% and ensuring timely updates on relevant activities. Employed a persistent chat system within the platform, leading to a 25% rise in user satisfaction due to seamless communication.`],
      technologies: ['React.Js', 'Node.Js','Express.Js','MongoDB','Socket.io'],
    },
  ];

  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <div className='project-page'>
      <div className="project-list">
        {projectsData.map((project) => (
          <Card key={project.id} className="project-item" raised={expandedProject === project.id}>
            <div className="project-header" onClick={() => toggleProject(project.id)}>
              <Typography variant="h6">{project.title}</Typography>
              <Typography variant="body1">TechStack: {project.technologies.join(', ')}</Typography>
              <Typography variant="body2">Timeline: {project.timeline}</Typography>
            </div>
            <Collapse in={expandedProject === project.id}>
              <CardContent>
                
                <Typography variant="body1">Source Code: <a href={project.GitHub} target="_blank" rel="noopener noreferrer">{project.title}</a></Typography>
                <Typography variant="body2">Description:</Typography>
                <List>
                  {project.descriptionPoints.map((point, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={point} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
