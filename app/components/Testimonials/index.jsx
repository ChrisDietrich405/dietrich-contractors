"use client";
import React, { useEffect, useState } from "react";

import ContentSlider from "../ContentSlider";
import testimonialData from "@/TestimonialData";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(testimonialData);

  return (
    <div style={{ marginTop: "30px" }}>
      <h1>Testimonials</h1>

      <ContentSlider
        typeOfSlide="text"
        childrenImageHeight="large"
        numOfSlides={1}
        slideContent={testimonials}
      />
    </div>
  );
};

export default Testimonials;
