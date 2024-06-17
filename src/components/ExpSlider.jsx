import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import exp1 from '../assets/exp1.png';
import exp2 from '../assets/exp2.png';
import exp3 from '../assets/exp3.png';


const ExpSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={2.7}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide className='slide'>
          <img src={exp1} alt="" />
          <div className="textBox">
            <p>5.0 <span>(30) • USA</span></p>
            <p>Life lessons with Katie Zaferes</p>
            <p><span>From $136 </span>/ person</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src={exp2} alt="" />
          <div className="textBox">
            <p>5.0 <span>(30) • USA</span></p>
            <p>Life lessons with Katie Zaferes</p>
            <p><span>From $136 </span>/ person</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src={exp3} alt="" />
          <div className="textBox">
            <p>5.0 <span>(30) • USA</span></p>
            <p>Life lessons with Katie Zaferes</p>
            <p><span>From $136 </span>/ person</p>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default ExpSlider;