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

const Projects = () => {
  const cards = [
    {
      title: "Before",
      image: "/before2.jpeg",
    },
    {
      title: "After",
      image: "/after2.jpeg",
    },
    {
      title: "Before",
      image: "/before.jpeg",
    },
    {
      title: "After",
      image: "/after.jpeg",
    },
  ];
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <h1>Projects</h1>
      <Grid container spacing={4}>
        {cards.map((card, index) => (
          <Grid item key={card} xs={12} sm={6}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Image
                  src={card.image}
                  width={400}
                  height={300}
                  alt="Picture of the author"
                />
                <Typography gutterBottom variant="h5" component="h2">
                  {card.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
