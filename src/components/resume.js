import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experiance';
import Skills from './skill';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://media-exp1.licdn.com/dms/image/C5103AQEsP4IORM8cQQ/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=3RQMCgev-1zWqNv25aP_834Ey-GKo6QI31Zzq-73bk4"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Arman Ali</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>A result oriented Software Engineer by Profession and curious by passion. With a Bachelor's degree in Computer Engineering.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>New Delhi, India</p>
            <h5>Phone</h5>
            <p>(91) 95010-81103</p>
            <h5>Email</h5>
            <p>Armanali12371@gmail.com</p>
            <h5>Web</h5>
            <p>armanali.in</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2015}
              endYear={2019}
              schoolName="Lyallpur Khalsa Colege of Engineering"
              schoolDescription="Bachelor of Technology"
              cource=" Computer Science Engineering"
               />

               <Education
                 startYear={2013}
                 endYear={2015}
                 schoolName="D.A.V College"
                 schoolDescription="10+2"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={"July 2019" }
              endYear={"Present"}
              jobName="Jr. Software Developer"
              jobcompny="Work Companion LLP."
              jobDescription="Working as a Full Stack Developer for the Software Company and building SaaS based products.Tech Stack: PHP, Codeigniter, Ajax, JQuer, Mysql."
              />

              <Experience
                startYear={"Jan 2019"}
                endYear={"July 2019"}
                jobName="Intern - Web Developer"
                jobcompny="Work Companion LLP."
                                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>

                <Skills
                  skill="HTML/CSS"
                  progress={90}
                  />
                <Skills
                  skill="PHP"
                  progress={80}
                  />
                <Skills
                  skill="React"
                  progress={25}
                  />
                <Skills
                  skill="Mysql"
                  progress={85}
                  />
                <Skills
                  skill="Codeigniter"
                  progress={69}
                  />
                  <Skills
                    skill="javascript"
                    progress={50}
                    />
                    <Skills
                      skill="Ajax"
                      progress={69}
                      />
                      <Skills
                        skill="JQuery"
                        progress={65}
                        />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
