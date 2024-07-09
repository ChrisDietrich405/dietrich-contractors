import * as React from "react";
import Image from "next/image";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

import { AiFillInstagram } from "react-icons/ai";
import { SiNextdoor } from "react-icons/si";
import { Box } from "@mui/material";

import styles from "./styles.module.css";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        p: 2,
        borderTop: ".5px solid black",
      }}
    >
      <Container sx={{ py: 8 }} maxWidth="md">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: 1,
            m: 1,

            borderRadius: 1,
          }}
        >
          <Grid xs={12}>
            {" "}
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Link href="/">
              <Image
                src="/dclogo.png"
                width={50}
                height={50}
                alt="Company Logo"
              />
            </Link>
            <Typography variant="body2" color="text.secondary">
              203 17th Ave Brooklyn Park, MD
            </Typography>
            <Typography variant="body2" color="text.secondary">
              dietrichcontractors@gmail.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1 443 306 5270
            </Typography>
          </Grid>
          <Grid xs={12}>
            {" "}
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Box
              sx={{
                flexGrow: 0,
                display: "flex",
                justifyContent: "space-between",
                width: "100px",
                alignItems: "center",
              }}
            >
              <a
                href="https://www.instagram.com/dietrichcontractors/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram
                  className={styles.social_media_icon_instagram}
                />
              </a>
              <a
                href="https://nextdoor.com/pages/dietrich-contractors-brooklyn-md/?init_source=search&query=dietrich%20contractors"
                target="_blank"
                rel="noreferrer"
              >
                <SiNextdoor className={styles.social_media_icon_nextdoor} />
              </a>
            </Box>
          </Grid>
        </Box>

        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Dietrich Contractors
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
