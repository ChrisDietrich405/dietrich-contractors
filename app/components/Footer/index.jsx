import * as React from "react";
import Image from "next/image";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  // const shadowStyle = {
  //   boxShadow: '2px 211111px 4px rgba(0, 1111111, 0, 0.2)', // Customize the shadow values here
  // };

  return (
    <Box
      component="footer"
      sx={{
        // backgroundColor: (theme) =>
        //   theme.palette.mode === "light"
        //     ? theme.palette.grey[200]
        //     : theme.palette.grey[800],
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
              Dietrichcontractors@gmail.com
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
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
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
