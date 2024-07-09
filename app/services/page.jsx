"use client";
import React, { useState } from "react";
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

const Services = () => {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Typography variant="h4">Services</Typography>
      <Typography variant="h6">
        Dietrich Contractors has more than 80 likes on Next Door. We provide our
        customers with excellent and personalized service. Below you will find a
        list of what we do. Feel free to connect with us any time at 443 306
        5270 or through email with dietrichcontractors@gmail.com
      </Typography>
    </Container>
  );
};

export default Services;
