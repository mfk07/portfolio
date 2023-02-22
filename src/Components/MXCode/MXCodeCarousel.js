import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.scss";

// import required modules
import { Pagination, Navigation } from "swiper";
import { MXCodeProjects } from "../../Data/mxcodeprojects";

export default function MXCodeCarousel() {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {MXCodeProjects.map((MXCodeProject) => (
            <SwiperSlide
                key={MXCodeProject.title}>
                    <div className="row mxTextDisplay mt-5">
                      <div className="col-lg-4">
                        <p className="fw-bold mb-3">{MXCodeProject.title} - {MXCodeProject.date}</p>
                        <p className="mb-3">{MXCodeProject.description}</p>
                        <p className="mb-3">{MXCodeProject.tech}</p>
                        <a href={MXCodeProject.url} target="blank">Live site</a>
                      </div>
                      <div className="col-lg-8">
                      <img class="mxCarouselImages" src={MXCodeProject.images} alt="screenshot of project landing page"/>
                      </div>
                    </div>
                </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
