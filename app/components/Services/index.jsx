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

import styles from "./styles.module.css";

const Services = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        // pt: 8,
        // pb: 6,
      }}
    >
      <Container sx={{ pb: 8 }} maxWidth="md">
        <h1>Services</h1>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: 1,
            m: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
          }}
        >
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",

              boxShadow: "none",
            }}
          >
            <FaPaintRoller className={styles.icon} />
          </Card>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",

              boxShadow: "none",
            }}
          >
            <Image
              src="/bricks.png"
              width={150}
              height={150}
              alt="bricks"
            ></Image>
          </Card>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",

              boxShadow: "none",
            }}
          >
            <BsFillHouseDoorFill className={styles.icon} />
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
