import React from 'react';
import './testimonials.css';
import Avtr1 from '../../assets/Avtr1.jpg';
import Avtr2 from '../../assets/Avtr2.jpg';
import Avtr3 from '../../assets/Avtr3.jpg';
import Avtr4 from '../../assets/Avtr4.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: Avtr1,
    name: 'Talha Khanzada',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit, I have been using your website for a while now and I am very satisfied with the quality and the user interface that ypu provide for us Its absolutely awesome keep it up and best for the future!!'
  },
  {
    avatar: Avtr2,
    name: 'Daniyal Zahid',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit, I have been using your website for a while now and I am very satisfied with the quality and the user interface that ypu provide for us Its absolutely awesome keep it up and best for the future!!'
  },
  {
    avatar: Avtr3,
    name: 'Rehan Meo',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit, I have been using your website for a while now and I am very satisfied with the quality and the user interface that ypu provide for us Its absolutely awesome keep it up and best for the future!!'
  },
  {
    avatar: Avtr4,
    name: 'Mohsin Raza',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit, I have been using your website for a while now and I am very satisfied with the quality and the user interface that ypu provide for us Its absolutely awesome keep it up and best for the future!!'
  },

]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[Pagination,]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
          <div className='client__avatar'>
            <img src={avatar} alt='Avatar One' />  
          </div>
            <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  );
}

export default Testimonials;
