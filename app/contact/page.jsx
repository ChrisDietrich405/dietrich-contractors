"use client";
import React, { useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import {
  TextField,
  Typography,
  Box,
  Button,
  Container,
  Grid,
} from "@mui/material";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    var templateParams = {
      firstName,
      lastName,
      email,
      message,
      to_name: "Chris",
    };
    console.log(templateParams);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        (result) => {
          notify();
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Typography variant="h4" mb={2} mt={2} sx={{ textAlign: "center" }}>
        Contact us today for a free estimate
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "50%" },
            }}
            onSubmit={sendEmail}
          >
            <TextField
              id="firstName"
              label="First Name"
              variant="outlined"
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
            ></TextField>

            <TextField
              id="lastName"
              label="Last Name"
              variant="outlined"
              onChange={(e) => setLastName(e.target.value)}
              type="text"
            ></TextField>

            <TextField
              id="email"
              label="Email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
              type="text"
            ></TextField>

            <TextField
              id="message"
              label="Message"
              variant="outlined"
              onChange={(e) => setMessage(e.target.value)}
              multiline
              rows={5}
            />
            <Button type="submit">Submit</Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <Image
              style={{ borderRadius: "6px" }}
              src="/fence.jpg"
              width={300}
              height={300}
              alt="Picture of the author"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
