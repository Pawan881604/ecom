"use client";
import React from "react";
import "./home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Set the autoplay speed in milliseconds (adjust as needed)
    appendArrows: "#custom-arrows",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  const images = [
    "https://img1.junaroad.com//assets/images/mobileNotif/img-1716542394142.jpg?crsl_pos=3",
    "https://img1.junaroad.com//assets/images/mobileNotif/img-1712745439415.jpg?crsl_pos=3",
    "https://img1.junaroad.com//assets/images/mobileNotif/img-1714133685161.jpg?crsl_pos=3",
    "https://img1.junaroad.com//assets/images/mobileNotif/img-1712569926937.jpg?crsl_pos=3",
    "https://img1.junaroad.com//assets/images/mobileNotif/img-1708930303138.jpg?crsl_pos=3",
    "https://img1.junaroad.com//assets/images/mobileNotif/img-1695120086720.jpg?crsl_pos=3",
    "https://img1.junaroad.com//assets/images/mobileNotif/img-1695115470561.jpg?crsl_pos=3",
    "https://img1.junaroad.com//assets/images/mobileNotif/img-1716355896537.jpg?crsl_pos=3",
    "https://img1.junaroad.com//assets/images/mobileNotif/img-1712733496479.jpg?crsl_pos=3",
    "https://img1.junaroad.com//assets/images/mobileNotif/img-1712733522328.jpg?crsl_pos=3",
    "https://img1.junaroad.com//assets/images/mobileNotif/img-1712733558922.jpg?crsl_pos=3",
    "https://img1.junaroad.com//assets/images/mobileNotif/img-1712733623397.jpg?crsl_pos=3",
    "https://img1.junaroad.com//assets/images/mobileNotif/img-1712733672018.jpg?crsl_pos=3",
    "https://img1.junaroad.com//assets/images/mobileNotif/img-1712733782273.jpg?crsl_pos=3",
    "https://img1.junaroad.com//assets/images/mobileNotif/img-1712733838108.jpg?crsl_pos=3",
    "https://img1.junaroad.com//assets/images/mobileNotif/img-1712727433553.jpg?crsl_pos=3",
    "https://img1.junaroad.com//assets/images/mobileNotif/img-1712728097789.jpg?crsl_pos=3",
    "https://img1.junaroad.com//assets/images/mobileNotif/img-1716542394142.jpg?crsl_pos=3",
  ];
  return (
    <section className="pt-2.50 pb-7">
      <div className="container mx-auto p-2" style={{maxWidth:'1000px'}}>
        <Slider {...settings}>
          {images &&
            images.map((item, i) => (
              <div key={i}>
                <img src={item} alt="d" />
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};
const CustomPrevArrow = (props) => (
  <div className="custom-prev-arrow custom-arrow" onClick={props.onClick}>
    <FaAngleLeft />
  </div>
);

const CustomNextArrow = (props) => (
  <div className="custom-next-arrow custom-arrow" onClick={props.onClick}>
    <FaAngleRight />
  </div>
);
export default HeroSlider;
