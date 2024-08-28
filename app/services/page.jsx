"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { SiNextdoor } from "react-icons/si";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import styles from "./styles.module.css";

const cards = [
  {
    title: "Kitchen Remodeling",
    description:
      "We are committed to transforming your kitchen into the heart of your home. Our goal is to help you design a space that not only meets your cooking needs but also reflects your style and enhances your daily life. Whether you’re dreaming of a sleek modern design or a cozy traditional setup, we are here to bring your vision to life.",
  },
  {
    title: "Bathroom Remodeling",
    description:
      "We're passionate about helping you create a bathroom that not only meets your needs but exceeds your expectations. Whether it's a simple update or a complete overhaul, we treat every project with the same level of care and dedication. Ready to get started? Contact us today for a free consultation, and let’s begin the journey to your dream bathroom.",
  },
  {
    title: "Deck Installation",
    description:
      "We believe that your outdoor space should be as inviting and enjoyable as the inside of your home. That’s why we’re dedicated to creating stunning decks that become the perfect backdrop for relaxation, gatherings, and making lasting memories. Whether you’re looking for a cozy retreat or a grand entertainment area, we bring the same level of care and craftsmanship to every deck installation project.",
  },
  {
    title: "Fence Installation",
    description:
      "Your fence is more than just a boundary—it’s an extension of your home that provides privacy, security, and style. Our goal is to help you build a fence that not only enhances your property’s aesthetics but also meets your practical needs. Whether you’re looking for a classic picket fence or a modern privacy barrier, we bring the same dedication and craftsmanship to every project.",
  },
  {
    title: "Plumbing",
    description:
      "We understand that plumbing problems can disrupt your day and cause unnecessary stress. That’s why we’re dedicated to providing reliable and efficient plumbing solutions to keep your home or business running smoothly. Whether you’re dealing with a leaky faucet, a clogged drain, or a major plumbing overhaul, we’re here to help with the same level of care and expertise.",
  },
  {
    title: "Painting",
    description:
      "A fresh coat of paint can transform your space and bring new life to your home or business. Whether you’re looking to update your interiors, refresh your exterior, or add a touch of creativity to a room, we’re here to deliver high-quality painting services with a focus on customer satisfaction.",
  },
  {
    title: "Electrical Work",
    description:
      "Electrical issues can be both disruptive and concerning. That’s why we’re committed to providing reliable and efficient electrical services that keep your home or business running smoothly. Whether you need a simple repair, a new installation, or a complete upgrade, our team is here to deliver top-notch service with a focus on safety and quality.",
  },
];

const Services = () => {
  return (
    <Box sx={{ bgcolor: "background.paper", py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h1"
          sx={{
            marginBottom: "20px",
            textAlign: "center",
            width: "100%",
            fontWeight: "bold",
          }}
        >
          Services
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {cards.map((card, index) => (
            <Card
              key={index}
              sx={{
                width: `calc(25% - 16px)`, // Ensures four cards per line with gap accounted for
                display: "flex",
                flexDirection: "column",
                p: 3,
                boxShadow: 0,
                border: "1px solid lightgray",
                borderRadius: 2,
                "&:hover": {
                  boxShadow: 4,
                  transform: "scale(1.05)",
                  transition: "transform 0.3s ease-in-out",
                },
              }}
            >
              <Typography variant="h6" mt={2}>
                {card.title}
              </Typography>
              <Typography variant="body2" mt={1} color="text.secondary">
                {card.description}
              </Typography>
            </Card>
          ))}
        </Box>
        <Box sx={{ display: "flex", gap: "40px" }}>
          <Card
            sx={{
              padding: "20px",
              gap: "20px",
              width: "50%",
              margin: "30px auto",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              src="/jmservices.jpg"
              width={50}
              height={50}
              alt="JM Services Logo"
            />
            <a
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "start",
                textDecoration: "none",
              }}
              target="_blank"
              href="https://nextdoor.com/pages/jm-services-middle-river-md"
              rel="noopener noreferrer"
            >
              <Typography
                sx={{ fontWeight: "bolder", fontSize: "20px" }}
                color="text.secondary"
              >
                Need help with mowing?
              </Typography>
              <Typography color="text.secondary">
                My younger brother <b>Jay</b> does that.
              </Typography>
            </a>
          </Card>
          <Card
            sx={{
              padding: "20px",
              gap: "20px",
              width: "50%",
              margin: "30px auto",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src="/dietrichlandcare.jpg" alt="" width={50} height={50} />
            {/* <Image
              src="/dietrichlandcare.jpg"
              width={50}
              height={50}
              alt="Company Logo"
            /> */}
            <a
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "start",
                textDecoration: "none",
              }}
              target="_blank"
              href="https://www.dietrichlandcare.com/"
              rel="noopener noreferrer"
            >
              <Typography
                sx={{ fontWeight: "bolder", fontSize: "20px" }}
                color="text.secondary"
              >
                Need help with landscaping services?
              </Typography>
              <Typography color="text.secondary">
                My older brother <b>Devin</b> does that.
              </Typography>
            </a>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
