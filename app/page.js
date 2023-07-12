//www.cgtconstructionllc.com

"use client";
import * as React from "react";
import Image from "next/image";
import { FaPaintRoller } from "react-icons/fa";
import { BsFillHouseDoorFill } from "react-icons/bs";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Navbar from "./components/Navbar";
import SlideShow from "./components/SlideShow";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

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
              url: "/fence.jpg",
              title: "Fence Installation",
            },
            {
              url: "/deck.jpg",
              title: "Deck Installation",
            },
            {
              url: "/paver.jpg",
              title: "Paver Installation",
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
          </Container>
        </Box>
        <Footer />
      </main>
    </ThemeProvider>
  );
}
