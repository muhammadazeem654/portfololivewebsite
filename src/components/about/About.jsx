import React from 'react';
import './about.css';
import azeem from '../../assets/azeem.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={azeem} alt='Image' />
          </div>
        </div>
        <div className='about__content'>
         <div className='about__cards'>
          <article className='about__card'>
            <FaAward className='about__icon'/>  
            <h5>Experience</h5>
            <small>1+ Years Working</small>
          </article>
          <article className='about__card'>
            <FiUsers className='about__icon'/>  
            <h5>Clients</h5>
            <small>1000 + WorldWide (InshAllah)</small>
          </article>
          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>  
            <h5>Projects</h5>
            <small>10+ Completed</small>
          </article>
         </div>

          <p>
          The sun dipped below the horizon, painting the sky in vibrant hues of orange and pink. A gentle breeze rustled through the trees, carrying with it the scent of blooming flowers. The waves crashed against the shore, creating a soothing rhythm. As darkness descended, stars began to twinkle, illuminating the night sky with their celestial glow. It was a peaceful evening, filled with nature's beauty and serenity
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
