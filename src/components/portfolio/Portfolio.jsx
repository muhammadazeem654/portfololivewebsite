import React from 'react';
import './portfolio.css';
import M1 from '../../assets/M1.png';
import R1 from '../../assets/R1.png';
import B1 from '../../assets/B1.png';
import MP1 from '../../assets/MP1.png';
import M5 from '../../assets/M5.png';
import M8 from '../../assets/M8.png';



// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: M1,
    tittle: 'MageMoz Provide A Eccomerce Solution For Clients',
    github: 'https://github.com/muhammadazeem654',
    demo: 'https://www.behance.net/muhammadazeem45'
  },
  {
    id: 2,
    image: R1,
    tittle: 'An Eccomerce Website For Online Bussiness',
    github: 'https://github.com/muhammadazeem654',
    demo: 'https://www.behance.net/muhammadazeem45'
  },
  {
    id: 3,
    image: B1,
    tittle: 'The Portfolio Website Of A Car Company',
    github: 'https://github.com/muhammadazeem654',
    demo: 'https://www.behance.net/muhammadazeem45'
  },
  {
    id: 4,
    image: MP1,
    tittle: 'The Portfolio Website For A Frontend Developer',
    github: 'https://github.com/muhammadazeem654',
    demo: 'https://www.behance.net/muhammadazeem45'
  },
  {
    id: 5,
    image: M5,
    tittle: 'MageMoz Values &  Commitment For their Clients',
    github: 'https://github.com/muhammadazeem654',
    demo: 'https://www.behance.net/muhammadazeem45'
  },
  {
    id: 6,
    image: M8,
    tittle: 'MageMoz Get Ready your Work In 8 Weeks only',
    github: 'https://github.com/muhammadazeem654',
    demo: 'https://www.behance.net/muhammadazeem45'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
      {
    data.map(({id, image, tittle, github, demo}) => {
      return (
        <article key={id} className='portfolio__item'>
   <div className='portfolio__item-image'>
     <img src={image} alt={tittle} />
   </div>
     <h3>{tittle}</h3>
     <div className='portfolio__item-cta'>
     <a href={github} className='btn' target='_blank'>Github</a>
     <a href={demo}  className='btn btn-primary' target='_blank'>Live Demo</a>
     </div>
 </article>)
    })
   }
      </div>
    </section>
  );
}

export default Portfolio;
