// import styles from "./styles.module.css";
"use client";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import SlideShow from "../Slideshow";
import Services from "../Services";
import Projects from "../Projects";
import Testimonials from "../Testimonials";

const defaultTheme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <main>
        <SlideShow
          timeOut={3000}
          images={[
            {
              url: "/image2.png",
              title: "Bathroom Remodeling",
            },
            {
              url: "/image5.png",
              title: "Electrical",
            },
            {
              url: "/image4.png",
              title: "Kitchen Remodeling",
            },
          ]}
        ></SlideShow>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container sx={{ py: 8 }} maxWidth="md">
            <Services />
            <Projects />
            <Testimonials />
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
