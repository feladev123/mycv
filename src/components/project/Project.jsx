import React from 'react'
import "./Project.scss"
import Paper from '@mui/material/Paper';
import "./animate.css"
import ScrollAnimation from 'react-animate-on-scroll';

const Project = () => {
  return (
    <div className='project'>
        <h3>Projects</h3>
        <ScrollAnimation
        animateIn="bounceInLeft"
        animateOut="fadeOut"
        duration={0.5}
        delay={0}
        >
        <div className="projectCon">
            <Paper className="imgCon">
            <img src="https://preview.colorlib.com/theme/orbit/images/ximage_1_long.jpg.pagespeed.ic.FmTCN20Mxm.webp" alt="AboutMEImage" className="imgCont"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Deleniti aliquid soluta minima tenetur. Earum pariatur tenetur 
             praesentium, fugit maiores nihil unde voluptates.
             Voluptatem nihil quisquam neque temporibus facere. 
             Obcaecati saepe iure voluptates expedita nemo corporis, 
             facere rem totam suscipit omnis nulla blanditiis 
             necessitatibus cupiditate molestias fuga perferendis
             optio veniam accusantium?
            </p>
            <div className="linkbtn">
                <button><a href="/">Download</a></button>
                <button><a href="/">Github</a></button>
            </div>
            
            </Paper> 
            <Paper className="imgCon">
            <img src="https://preview.colorlib.com/theme/orbit/images/ximage_1_long.jpg.pagespeed.ic.FmTCN20Mxm.webp" alt="AboutMEImage" className="imgCont"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Deleniti aliquid soluta minima tenetur. Earum pariatur tenetur 
             praesentium, fugit maiores nihil unde voluptates.
             Voluptatem nihil quisquam neque temporibus facere. 
             Obcaecati saepe iure voluptates expedita nemo corporis, 
             facere rem totam suscipit omnis nulla blanditiis 
             necessitatibus cupiditate molestias fuga perferendis
             optio veniam accusantium?
            </p>
            <div className="linkbtn">
                <button><a href="/">Download</a></button>
                <button><a href="/">Github</a></button>
            </div>
            </Paper> 
            <Paper className="imgCon">
            <img src="https://preview.colorlib.com/theme/orbit/images/ximage_1_long.jpg.pagespeed.ic.FmTCN20Mxm.webp" alt="AboutMEImage" className="imgCont"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Deleniti aliquid soluta minima tenetur. Earum pariatur tenetur 
             praesentium, fugit maiores nihil unde voluptates.
             Voluptatem nihil quisquam neque temporibus facere. 
             Obcaecati saepe iure voluptates expedita nemo corporis, 
             facere rem totam suscipit omnis nulla blanditiis 
             necessitatibus cupiditate molestias fuga perferendis
             optio veniam accusantium?
            </p>
            <div className="linkbtn">
                <button><a href="/">Download</a></button>
                <button><a href="/">Github</a></button>
            </div>
            </Paper> 
        </div> 
      </ScrollAnimation>
    </div> 
  )
}

export default Project
