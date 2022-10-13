import React, { useState } from 'react'
import "./Nav.scss"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const Nav = () => {
  const [click, setClick]= useState(false)

  const handleClick=()=>setClick(!click)
  return (
    <div className="containerNav">
      <Box className="nav"
        sx={{
        width: "auto",
        height:"auto",
        }}>
        <Paper elevation={8} className="navlist">
          <h4>Chris<span>.</span></h4>
          <ul className={click ? "listed" :"list"}>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About </a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="/">Resume</a></li>
            <li><a href="/">Contact Me</a></li>
          </ul>
          <div className="icon" onClick={handleClick}>
            {click ? <MenuIcon/>: <MenuOpenIcon/>}
          </div>
        </Paper>
      </Box>
    </div>
  )
}

export default Nav