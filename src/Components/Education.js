import React,{useState} from 'react'
import {
    Card,
    CardContent,
    Typography,
    Collapse,
  } from '@mui/material';
  import './../Styles/Education.css';
const Education = () => {
    const [expandedEducation, setExpandedEducation] = useState(null);
    const education=[
        {
            id:2,
            institution:'Dalhousie University',
            degree:`Masters of Applid Computer Science`,
            startDate:new Date('2023-01-02'),
            endDate:new Date('2024-10-01'),
            courses:['Communicating Comp Sci Ideas','Software Development Concepts','Adv Topics in Software development','Data Mgmt, Warhsng Analytics','Technology Innovation','Adv Topics in Cloud Computing','Serverless Data Processing','Programming Language Learning','Adv. Topics in Web Development','Mobile Computing']
          },
        {
          id:1,
          institution:'Gujarat technological University',
          degree:`Bachelor's of Engineering - Information Technology`,
          startDate:new Date('2017-07-02'),
          endDate:new Date('2021-07-01'),
          courses:['C','C++','Java','Object-Oriented Programming','Data Structures','DBMS','OS','Distributed DBMS','Data Management and Business Intelligence','System Programming','Computer graphics','Computer Networks','Computer Organization','Analysis and design of Alogrithms','Advanced Java','Data Compression and Data Retrival','Image Processing','Web Technology','Mobile Computing and Wireless Communication','Python Programming']
        }
        
      ]
      const toggleEducation = (educationId) => {
        setExpandedEducation(expandedEducation === educationId ? null : educationId);
      };
    
      return (
        <div className='education-page'>
          <div className="education-list">
            {education.map((edu) => (
              <Card key={edu.id} className="education-item" onClick={() => toggleEducation(edu.id)}>
                <CardContent>
                  <Typography variant="h6">{edu.degree}</Typography>
                  <Typography variant="body1">{edu.institution}</Typography>
                  <Typography variant="body2">Duration: {edu.startDate.toLocaleDateString()} - {edu.endDate.toLocaleDateString()}</Typography>
                  <Collapse in={expandedEducation === edu.id}>
                    <div className="courses-container">
                      <Typography variant="body2">Courses:</Typography>
                      <div className="courses-list">
                        {edu.courses.map((course, index) => (
                          <Typography key={index} variant="body2" className="course-item">{course}</Typography>
                        ))}
                      </div>
                    </div>
                  </Collapse>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      );
}

export default Education