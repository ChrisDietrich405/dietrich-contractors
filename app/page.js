//www.cgtconstructionllc.com

"use client";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SlideShow from "./components/SlideShow";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
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
