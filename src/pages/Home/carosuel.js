// import React from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";

// import "../../Styles/styles-copy.css";

// // import required modules
// import { Navigation, Pagination } from "swiper/modules";

// function Carosuels() {
//   return (
//     <>
//       <Swiper
//         navigation={true}
//         modules={[Navigation, Pagination]}
//         loop={true}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <div class="slide">
//             <img
//               src="https://www.balancepo.com/storage/New%20folder/iStock_Man%20Jumping.jpg"
//               alt="New%20folder/iStock_Man%20Jumping.jpg"
//             />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div class="slide">
//             <img
//               src="https://www.balancepo.com/storage/images/Screen%20Shot%202014-03-03%20at%203_31_57%20PM.png"
//               alt="images/Screen%20Shot%202014-03-03%20at%203_31_57%20PM.png"
//             />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

// export default Carosuels;
// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

// export default () => {
//   return (
//     <Swiper
//       className="swiper-container" // Add this class
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
//       slidesPerView={1}
//       loop={true}
//       speed={1000}
//       navigation={true}
//       pagination={{ clickable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log("slide change")}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//     </Swiper>
//   );
// };
import "resize-observer-polyfill/dist/ResizeObserver.global";

import "react-slideshow-image/dist/styles.css";
import { css } from "@emotion/react";
import React from "react";
import { Slide } from "react-slideshow-image";

const sliderStyle = css`
  .each-fade {
    display: flex;
    width: 100%;
    height: 100vh;
  }

  .each-fade > div {
    width: 75%;
  }

  .each-fade > div img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .each-fade p {
    width: 25%;
    font-size: 1em;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 0;
    background: #adceed;
    padding: 0 1.5rem;
  }
`;

const SlideShow = () => {
  /* const images = ['/images/bg1.jpg', '/images/bg3.jpg', '/images/bg6.jpg']; */

  const fadeProperties = {
    duration: 3000,
    pauseOnHover: true,
  };

  return (
    <div css={sliderStyle}>
      <div className="slide-container">
        <Slide {...fadeProperties}>
          <div className="each-fade">
            <div>
              <img
                src="https://images.unsplash.com/photo-1682695795557-17447f921f79?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="slider0"
              />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img
                src="https://images.unsplash.com/photo-1682685797406-97f364419b4a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="slider1"
              />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img
                src="https://images.unsplash.com/photo-1682685796775-020fd5dcd7d1?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="slider2"
              />
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default SlideShow;
