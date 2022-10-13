import React from 'react'
import "./about.scss"
import "./animate.css"
import Paper from '@mui/material/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward } from '@fortawesome/free-solid-svg-icons'
//import GitHubIcon from '@material-ui/icons/GitHub';
import ScrollAnimation from "react-animate-on-scroll";



const About = () => {
return (
  <section className="container"> 
      <ScrollAnimation
            animateIn="bounceInLeft"
            animateOut="fadeOut"
            duration={0.5}
            delay={0}
            >
         <div className="Sms">
            <div className="picContainer">
              <img src="https://preview.colorlib.com/theme/orbit/images/ximage_1_long.jpg.pagespeed.ic.FmTCN20Mxm.webp" alt="AboutMEImage" className="imgCont"/>
            </div>
            <div className="about">
                <div className="aboutMe">
                  <span className="head">
                    <h2>About Me</h2>
                    <span></span>
                  </span>
                  <div className="Small">
                    <Paper className='SmallBx'> 
                      <FontAwesomeIcon icon={faAward} className="icon" />
                      <h5>Experience</h5>
                      <span>2 years working</span>
                    </Paper> 
                    <Paper className='SmallBx'>
                     {/* <GitHubIcon/>*/}
                      <span>2 years working</span> 
                    </Paper>
                    <Paper className='SmallBx'>hello</Paper>
                  </div>
                </div>
            </div>
         </div> 
      </ScrollAnimation>
    </section>
  )
}

export default About