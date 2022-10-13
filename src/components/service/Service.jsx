import React from 'react'
import "./animate.css"
import "./service.scss"
import ScrollAnimation from "react-animate-on-scroll";
import { Paper } from '@material-ui/core'; 
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const Service = () => {
  return (
    <div className='service'> 
        <h2>My Experience</h2>  
        <ScrollAnimation
            animateIn="bounceInRight"
            animateOut="fadeOutRight"
            duration={0.5}
            delay={0}
            >
            <div className="sevCon">  
              <Paper className="boxSev"> 
                <h4>Frontend Development</h4>
                  <ul>
                    <li><CheckCircleIcon/> HTML</li>
                    <li><CheckCircleIcon/> CSS</li>
                    <li><CheckCircleIcon/> Sass</li>
                    <li><CheckCircleIcon/> Bootstrap</li>
                    <li><CheckCircleIcon/> Tailwind css</li>
                    <li><CheckCircleIcon/>JavaScript</li>
                    <li><CheckCircleIcon/>ReactJs</li>
                    <li><CheckCircleIcon/>React Redux</li>
                    <li><CheckCircleIcon/>TypeScript</li>
                    <li><CheckCircleIcon/>NextJs</li>
                    <li><CheckCircleIcon/>Material ui</li>
                    <li><CheckCircleIcon/>Styled Components</li>
                  </ul>
              </Paper>
            </div>
        </ScrollAnimation>
    </div>
  )
}

export default Service