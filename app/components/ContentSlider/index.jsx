import React from "react";
import Slider from "react-slick";

import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

import TextSlideCard from "../TextSlideCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./styles.module.css";


const ContentSlider = ({
  numOfSlides,
  slideContent,
}) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button className={styles.next_button} onClick={onClick}>
        <BsFillArrowRightCircleFill className={styles.next_arrow} />
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button className={styles.prev_button} onClick={onClick}>
        <BsFillArrowLeftCircleFill className={styles.prev_arrow} />
      </button>
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: numOfSlides || 5,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings} className={styles.slider_container}>
      {slideContent.map((listItem) => {
        return <TextSlideCard key={listItem.title} listItem={listItem} />;
      })}
    </Slider>
  );
};

export default ContentSlider;
