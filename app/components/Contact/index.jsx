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

    try {
      const validator = new Validator(
        {
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          email: emailRef.current.value,
          phone: phoneRef.current.value,
          message: messageRef.current.value,
        },
        {
          firstName: "required",
          lastName: "required",
          email: "required|email",
          phone: "required",
          message: "required",
        },
        {
          "required.firstName": "The first name field is required",
          "required.lastName": "The last name field is required",
          "required.email": "The email field is required",
          "required.phone": "The phone field is required",
          "required.message": "The message field is required",
        }
      );

      if (validator.passes()) {
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

        toast.success("Your message was successfully sent");
        clearFormFields();
      } else {
        setErrors(validator.errors.errors);
        console.log(errors);
        // toast.error("Please check the form for errors");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again later");
    }

    setIsDisabled(false);
  };

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <ToastContainer />
      <Typography variant="h4" mb={2} mt={2} sx={{ textAlign: "center" }}>
        Contact us today for a free estimate
      </Typography>
      <Grid
        component="form"
        onSubmit={sendEmail}
        container
        spacing={2}
        sx={{
          border: "1px solid black",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid item md={6} xs={12}>
          <Box
            sx={{
              borderRadius: "6px",
              padding: "10px 30px",
            }}
          >
            {/* <label htmlFor="firstName">First Name</label> */}
            <input
              id="firstName"
              type="text"
              ref={firstNameRef}
              name="firstName"
              placeholder="First Name"
              className={styles.input_text}
              tabIndex="1"
            />
            {errors.firstName && (
              <p className={styles.error_message}>
                {errors.firstName.join(", ")}
              </p>
            )}
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box
            sx={{
              borderRadius: "6px",
              padding: "10px 30px",
            }}
          >
            {/* <label htmlFor="firstName">First Name</label> */}

            {/* <label htmlFor="lastName">Last Name</label> */}
            <input
              id="lastName"
              type="text"
              ref={lastNameRef}
              name="lastName"
              placeholder="Last Name"
              className={styles.input_text}
              tabIndex="1"
            />
            {errors.lastName && (
              <p className={styles.error_message}>
                {errors.lastName.join(", ")}
              </p>
            )}
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box
            sx={{
              borderRadius: "6px",
              padding: "10px 30px",
            }}
          >
            <input
              id="email"
              type="text"
              ref={emailRef}
              name="email"
              placeholder="Email"
              className={styles.input_text}
              tabIndex="1"
            />
            {errors.email && (
              <p className={styles.error_message}>{errors.email.join(", ")}</p>
            )}
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box
            sx={{
              borderRadius: "6px",
            }}
          >
            <input
              id="phone"
              type="text"
              ref={phoneRef}
              name="phone"
              placeholder="Phone Number"
              className={styles.input_text}
              tabIndex="1"
            />
            {errors.phone && (
              <p className={styles.error_message}>{errors.phone.join(", ")}</p>
            )}
          </Box>
        </Grid>

        <Grid item md={12} xs={6}>
          <Box>
            <textarea
              id="message"
              placeholder="Start typing..."
              className={styles.message}
              name="message"
              ref={messageRef}
            />
            {errors.message && (
              <p className={styles.error_message}>
                {errors.message.join(", ")}
              </p>
            )}
          </Box>
          <Button
            disabled={isDisabled}
            sx={{ marginTop: "20px", width: "100%", textAlign: "center" }}
            type="submit"
          >
            {isDisabled ? "Sending..." : "Send"}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
