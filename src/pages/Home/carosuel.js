import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../../Styles/styles-copy.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

function Carosuels() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div class="slide">
            <img
              src="https://www.balancepo.com/storage/New%20folder/iStock_Man%20Jumping.jpg"
              alt="New%20folder/iStock_Man%20Jumping.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="slide">
            <img
              src="https://www.balancepo.com/storage/images/Screen%20Shot%202014-03-03%20at%203_31_57%20PM.png"
              alt="images/Screen%20Shot%202014-03-03%20at%203_31_57%20PM.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carosuels;
