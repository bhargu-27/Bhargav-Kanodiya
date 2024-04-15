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
import './../Styles/WorkExperience.css';

const WorkExperience = () => {
  const workExperienceData = [
    {
      id: 3,
      position: 'Software Engineer',
      company: 'Bacancy Software LLP',
      address: 'Ahmedabad, Gujarat, India',
      startDate: new Date('2021-07-02'),
      endDate: new Date('2022-10-31'),
      descriptionPoints: [
        `Suggested flaws and implemented to 80% improvement in API performance for Node.js applications, employing advanced optimizations in real-time WebSocket communication.`,
        `Strategically Built Firebase Functions to architect scalable, serverless backends, optimizing performance and reducing Platform cost by 75%.`,
        `Practiced Agile methodologies, collaborating with cross-functional teams to deliver projects promptly and adapt to evolving requirements. Led pivotal code refactoring efforts, elevating code quality to ensure the delivery of high-quality, secure products within project deadlines.`,
      ],
    },
    {
      id: 2,
      position: 'Software Trainee/Intern',
      company: 'Bacancy Software LLP',
      address: 'Ahmedabad, Gujarat, India',
      startDate: new Date('2021-01-02'),
      endDate: new Date('2022-06-30'),
      descriptionPoints: [
        `Produced an Inventory Management System using Node.js and React.js Applied Agile methodologies for iterative development cycles.`,
        `Emphasized best practices to integrate features seamlessly Received formal appreciation from the company for delivering a flawless project. The Agile approach ensured adaptability and collaboration, contributing to project success.`,
      ],
    },
  ];

  const [expandedExperience, setExpandedExperience] = useState(null);

  const toggleExperience = (experienceId) => {
    setExpandedExperience(expandedExperience === experienceId ? null : experienceId);
  };

  return (
    <div className='experience-page'>
      <div className="experience-list">
        {workExperienceData.map((experience) => (
          <Card key={experience.id} className="experience-item" raised={expandedExperience === experience.id}>
            <div className="experience-header" onClick={() => toggleExperience(experience.id)}>
              <Typography variant="h6">{experience.position}</Typography>
              <Typography variant="body1">{experience.company}</Typography>
              <Typography variant="body2">{experience.address}</Typography>
              <Typography variant="body2">Duration: {experience.startDate.toLocaleDateString()} - {experience.endDate.toLocaleDateString()}</Typography>
            </div>
            <Collapse in={expandedExperience === experience.id}>
              <CardContent>
                <Typography variant="body2">Description:</Typography>
                <List>
                  {experience.descriptionPoints.map((point, index) => (
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

export default WorkExperience;
