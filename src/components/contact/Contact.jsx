import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

  
  const form =  useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o5x7nek', 'template_090h5a4', form.current, 'q2hFjqBkymsKReZxy')
     
    e.target.reset( )
  };
  return (
   <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className='container contact__container'>
      <div className='contact__options'>
        <article className='contact__option'>
        <MdOutlineEmail className='contact__option-icon' />
           <h4>Email</h4>
           <h5>muhammadazeemrao1122@gmail.com</h5>
           <a href='mailto:muhammadazeemrao1122@gmail.com' target='_blank'>Send a message</a>
        </article>
        <article className='contact__option'>
        <RiMessengerLine  contact__option-icon />
           <h4>Messenger</h4>
           <h5>For Contact</h5>
           <a href="https://www.facebook.com/profile.php?id=100016556509456" target="_blank">Send a message</a>

        </article>
        <article className='contact__option'>
        <BsWhatsapp contact__option-icon />
           <h4>WhatsApp</h4>
           <h5>+92 3128854683</h5>
           <a href='https://api.whatsapp.com/send?phone=923128854683&text=Hello%2C%20how%20can%20I%20help%20you%3F' target='_blank'>Send a message</a>
        </article>
      </div>

      {/* END OF CONTACT OPTIONS */}
      <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Your Full Name' required />
        <input type='email' name='email' placeholder='Your Email' required />
        <textarea name='message' rows='7' placeholder='Your Message' required />
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>

    </div>
   </section>
  );
}

export default Contact;
