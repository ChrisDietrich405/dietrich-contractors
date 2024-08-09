"use client";

import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import * as Validator from "validatorjs";
import { Typography, Box, Button, Container, Grid } from "@mui/material";
import styles from "./styles.module.css";

const Contact = () => {
  const [errors, setErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);

  const clearFormFields = () => {
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
    messageRef.current.value = "";
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsDisabled(true);

    const validationRules = {
      firstName: "required",
      lastName: "required",
      email: "required|email",
      phone: "required",
      message: "required",
    };

    const validationMessages = {
      "required.firstName": "The first name field is required",
      "required.lastName": "The last name field is required",
      "required.email": "The email field is required",
      "required.phone": "The phone field is required",
      "required.message": "The message field is required",
    };

    const validator = new Validator(
      {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
        message: messageRef.current.value,
      },
      validationRules,
      validationMessages
    );

    if (validator.passes()) {
      try {
        const templateParams = {
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          email: emailRef.current.value,
          phone: phoneRef.current.value,
          message: messageRef.current.value,
          to_name: "Dietrich Contractors",
        };

        await emailjs.send(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          templateParams,
          process.env.NEXT_PUBLIC_USER_ID
        );

        toast.success("Your message was successfully sent!");
        clearFormFields();
      } catch (error) {
        console.error(error);
        toast.error("An error occurred. Please try again later.");
      }
    } else {
      setErrors(validator.errors.errors);
      toast.error("Please check the form for errors.");
    }

    setIsDisabled(false);
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <ToastContainer />
      <Typography variant="h4" align="center" sx={{ mb: 4 }}>
        Contact us today for a free estimate
      </Typography>
      <Grid
        component="form"
        onSubmit={sendEmail}
        container
        spacing={3}
        sx={{
          p: 4,
          border: "1px solid black",
          borderRadius: "8px",
          boxShadow: 3,
        }}
      >
        <Grid item md={6} xs={12}>
          <Box sx={{ mb: 2 }}>
            <input
              id="firstName"
              type="text"
              ref={firstNameRef}
              name="firstName"
              placeholder="First Name"
              className={styles.input_text}
            />
            {errors.firstName && (
              <Typography
                variant="caption"
                color="error"
                className={styles.error_message}
              >
                {errors.firstName.join(", ")}
              </Typography>
            )}
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box sx={{ mb: 2 }}>
            <input
              id="lastName"
              type="text"
              ref={lastNameRef}
              name="lastName"
              placeholder="Last Name"
              className={styles.input_text}
            />
            {errors.lastName && (
              <Typography
                variant="caption"
                color="error"
                className={styles.error_message}
              >
                {errors.lastName.join(", ")}
              </Typography>
            )}
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box sx={{ mb: 2 }}>
            <input
              id="email"
              type="text"
              ref={emailRef}
              name="email"
              placeholder="Email"
              className={styles.input_text}
            />
            {errors.email && (
              <Typography
                variant="caption"
                color="error"
                className={styles.error_message}
              >
                {errors.email.join(", ")}
              </Typography>
            )}
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box sx={{ mb: 2 }}>
            <input
              id="phone"
              type="text"
              ref={phoneRef}
              name="phone"
              placeholder="Phone Number"
              className={styles.input_text}
            />
            {errors.phone && (
              <Typography
                variant="caption"
                color="error"
                className={styles.error_message}
              >
                {errors.phone.join(", ")}
              </Typography>
            )}
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ mb: 3 }}>
            <textarea
              id="message"
              placeholder="Start typing..."
              className={styles.message}
              name="message"
              ref={messageRef}
            />
            {errors.message && (
              <Typography
                variant="caption"
                color="error"
                className={styles.error_message}
              >
                {errors.message.join(", ")}
              </Typography>
            )}
          </Box>
          <Button
            disabled={isDisabled}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              py: 2,
              textTransform: "uppercase",
              letterSpacing: 1.2,
              fontWeight: "bold",
            }}
          >
            {isDisabled ? "Sending..." : "Send"}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;

