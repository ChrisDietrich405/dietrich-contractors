"use client";
import React, { useEffect, useState } from "react";

import ContentSlider from "../ContentSlider";
import testimonialData from "@/TestimonialData";
import { Container, Typography } from "@mui/material";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(testimonialData);

  return (
    <Container maxWidth="md" sx={{ marginTop: "60px" }}>
      <Typography
        variant="h3"
        component="h1"
        sx={{
          marginBottom: "10px",
          textAlign: "center",
          width: "100%",
          fontWeight: "bold",
        }}
      >
        Testimonials
      </Typography>

      <ContentSlider
        typeOfSlide="text"
        childrenImageHeight="large"
        numOfSlides={1}
        slideContent={testimonials}
      />
    </Container>
  );
};

export default Testimonials;
