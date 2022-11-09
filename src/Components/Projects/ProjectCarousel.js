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
import { projects } from "../../Data/projects";

export default function ProjectCarousel() {
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
        {projects.map((project) => (
            <SwiperSlide
                key={project.title}>
                    <div className="row projectTextDisplay mt-5">
                      <div className="col-lg-4">
                        <p className="fw-bold mb-3">{project.title} - {project.date}</p>
                        <p className="mb-3">{project.description}</p>
                        <p className="mb-3">{project.tech}</p>
                        <a href={project.url} target="blank">Live site</a> <a href={project.git} target="blank">Github Repo</a>
                      </div>
                      <div className="col-lg-8">
                      <img class="carouselImages" src={project.images} alt="screenshot of project landing page"/>
                      </div>
                    </div>
                </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
