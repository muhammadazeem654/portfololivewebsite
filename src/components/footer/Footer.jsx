import React from 'react';
import logo1 from "../../assets/logo1.png";
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';



const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        <img src={logo1} alt='logo' className='image-logo'/>
        </a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#about'>Experience</a></li>
        <li><a href='#about'>Services</a></li>
        <li><a href='#about'>Portfolio</a></li>
        <li><a href='#about'>Testimonials</a></li>
        <li><a href='#about'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com'><FaFacebookF /></a>
        <a href='https://instagram.com'><FiInstagram /></a>
        <a href='https://twitter.com'><IoLogoTwitter /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Muhammad Portfolio. All rights reserved</small>
      </div>
    </footer>
  );
}

export default Footer;
