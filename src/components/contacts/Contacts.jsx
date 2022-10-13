import React from 'react'
import "./contacts.scss"
import "./animate.css"
import ScrollAnimation from "react-animate-on-scroll";
import Paper from '@mui/material/Paper';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import Footer from '../footer/Footer';


const Contacts = () => {
     const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j5olt3m', 'template_opodawg', form.current, '1esO0aga3_Y7FvYtT')
   
    e.target.reset()   
  };
  return (
    <div className='contacts'>
        <h2>Contact</h2>

        <div className='container'>
            <div className="message">
                <ScrollAnimation
                    animateIn="bounceInLeft"
                    animateOut="fadeOut"
                    duration={0.5}
                    delay={0}
                    >
                    <Paper elevation={3} className='EmailBox'>
                       <EmailIcon className="EmailIcon"/>
                       <h5>Email</h5>
                       <h5>taiwoakinfenwa2019@gmail.com</h5>
                       <a href="mailto:akinfenwa2019@gmail.com">Send a Message</a>
                    </Paper>
                    <Paper elevation={3} className='EmailBox'>
                       <FacebookIcon className="EmailIcon"/>
                       <h5>Facebook</h5>
                       <h5>Akinfenwa Taiwo Christopher</h5>
                       <a href="https://web.facebook.com/akinfenwa.taiwo.5/" target="_blank" without rel="noreferrer">Send a Message</a>
                    </Paper>
                    <Paper elevation={3} className='EmailBox'>
                       <WhatsAppIcon className="EmailIcon"/>
                       <h5>Whatsapp</h5>
                       <h5>Chris</h5>
                       <a href="https://api.whatsapp.com/send?phone=2349129787155&text=Hello%20Good%20Day" target="_blank" without rel="noreferrer">Send a Message</a>
                    </Paper>
                    </ScrollAnimation>
            </div>
            <div className="inputField">
                <ScrollAnimation
                  animateIn="bounceInRight"
                  animateOut="fadeOut"
                  duration={0.5}
                  delay={0}
                  >
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Enter Your FullName...." required/>
                    <input type="text" name="Email" placeholder="Enter Your Email..." required/>
                    <textarea name="message" id="" cols="30" rows="10" required placeholder="Type your Messages Here...."/>
                    <button type="submit">Submit</button>
                </form>
                </ScrollAnimation>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contacts