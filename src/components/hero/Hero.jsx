import React,{useState, useEffect} from 'react'
import "./hero.scss" 
import Box from '@mui/material/Box';
import Cv from "../../assests/Cv.pdf"


const Hero = () => {
  const [offsetX, setOffsetX] =useState(0);
  const handleScroll =()=>setOffsetX(window.pageYOffset);

  useEffect(()=>{
    window.addEventListener("scroll",handleScroll);

    return() => window.removeEventListener("scroll",handleScroll);
  },[]);  
  return (
    <div className="heroContainer">
    <Box className="heroBg"
    sx={{
    width: "auto",
    height:"600px",
    }}>
      <div className="Sms" style={{transform:`translateY(${offsetX * -0.5}px)`}}>
          <h3 >I'm Akinfenwa Christopher</h3>
          <p>A Front End Developer</p>
          <div className="Pc">
            <button><a href="/">Hire Me</a></button>
            <button><a href={Cv} download >Download CV</a></button>
          </div>
      </div>
    </Box>
    
    </div>
  )
}
export default Hero