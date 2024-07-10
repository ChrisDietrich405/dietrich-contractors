"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import * as Validator from "validatorjs";
import {
  TextField,
  Typography,
  Box,
  Button,
  Container,
  Grid,
} from "@mui/material";

import styles from "./styles.module.css";

const Contact = () => {
  const [errors, setErrors] = useState({});

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
          phone: "required|email",
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
      console.log("hello");
      if (validator.passes()) {
        const templateParams = {
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          email: emailRef.current.value,
          phone: phone.current.value,
          message: messageRef.current.value,
          to_name: "Dietrich Contractors",
        };

        await emailjs.send(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          templateParams,
          process.env.NEXT_PUBLIC_USER_ID
        );
        alert("good shit");
        // toast.success("Your message was successfully sent");
        clearFormFields();
      } else {
        setErrors(validator.errors.errors);
        console.log(errors);
        // toast.error("Please check the form for errors");
      }
    } catch (error) {
      console.error(error);
      // toast.error("An error occurred. Please try again later");
    }

    // setIsDisabled(false);
  };

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Typography variant="h4" mb={2} mt={2} sx={{ textAlign: "center" }}>
        Contact us today for a free estimate
      </Typography>
      <Grid
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
            component="form"
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

            <input
              id="email"
              type="text"
              ref={emailRef}
              name="email"
              placeholder="email"
              className={styles.input_text}
              tabIndex="1"
            />
            {errors.email && (
              <p className={styles.error_message}>{errors.email.join(", ")}</p>
            )}
            <input
              id="phone"
              type="text"
              ref={phoneRef}
              name="phone"
              placeholder="phone number"
              className={styles.input_text}
              tabIndex="1"
            />
            {errors.phone && (
              <p className={styles.error_message}>{errors.phone.join(", ")}</p>
            )}
            <Button
              sx={{ marginTop: "20px", width: "100%", textAlign: "center" }}
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </Grid>
        <Grid item md={6} xs={6}>
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
          {/* <Box>
            <Image
              style={{ borderRadius: "6px" }}
              src="/fence.jpg"
              width={300}
              height={300}
              alt="Picture of the author"
            />
          </Box> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
