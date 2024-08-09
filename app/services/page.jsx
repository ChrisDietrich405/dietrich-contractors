"use client";
import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
  Container,
} from "@mui/material";

const cards = [
  {
    title: "Kitchen Remodeling",
    description:
      "We are passionate about transforming your kitchen into the heart of your home. Our goal is to help you design a space that not only meets your cooking needs but also reflects your style and enhances your daily life. Whether you’re dreaming of a sleek modern design or a cozy traditional setup, we are here to bring your vision to life.",
  },
  {
    title: "Bathroom Remodeling",
    description:
      "We're passionate about helping you create a bathroom that not only meets your needs but exceeds your expectations. Whether it's a simple update or a complete overhaul, we treat every project with the same level of care and dedication.Ready to get started? Contact us today for a free consultation, and let’s begin the journey to your dream bathroom.",
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
      "A fresh coat of paint can transform your space and bring new life to your home or business. Whether you’re looking to update your interiors, refresh your exterior, or add a touch of creativity to a room, we’re here to deliver high-quality painting services with a focus on  customer satisfaction.",
  },
  {
    title: "Electrical Work",
    description:
      "Electrical issues can be both disruptive and concerning. That’s why we’re committed to providing reliable and efficient electrical services that keep your home or business running smoothly. Whether you need a simple repair, a new installation, or a complete upgrade, our team is here to deliver top-notch service with a focus on safety and quality.",
  },
  // {
  //   title: "Card 8",
  //   description: "This is card number 8",
  // },
  // {
  //   title: "Card 9",
  //   description: "This is card number 9",
  // },
];

function Services() {
  return (
    <Container>
      <Typography variant="h4" sx={{ fontWeight: "bold", marginTop: "30px" }}>
        Services
      </Typography>
      <Typography variant="h6">
        There's a reason Dietrich Contractors has more than 100 likes on Next
        Door. We provide our customers with excellent and personalized service.
        Below you will find a list of what we do. Feel free to connect with us
        any time at 443 306 5270 or through email with
        dietrichcontractors@gmail.com to get a free estimate for your next
        project.
      </Typography>
      <Grid container spacing={2} padding={2}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{ display: "flex", flexDirection: "column", height: "100%" }}
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
              {/* <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Services;

// "use client";

// import {
//   TextField,
//   Typography,
//   Box,
//   Button,
//   Container,
//   Grid,
//   List,
//   ListItem,
//   ListItemText,
// } from "@mui/material";

// const Services = () => {
//   return (
//     <Container sx={{ py: 8 }} maxWidth="md">
//       <Typography variant="h4" sx={{ fontWeight: "bold" }}>
//         Services
//       </Typography>
//       <Typography variant="h6">
//         There's a reason Dietrich Contractors has more than 100 likes on Next
//         Door. We provide our customers with excellent and personalized service.
//         Below you will find a list of what we do. Feel free to connect with us
//         any time at 443 306 5270 or through email with
//         dietrichcontractors@gmail.com to get a free estimate for your next
//         project.
//       </Typography>
//       <List>
//         <ListItem>
//           <ListItemText primary="Kitchen Remodeling" />
//         </ListItem>
//         <ListItem>
//           <ListItemText primary="Bathroom Remodeling" />
//         </ListItem>
//         <ListItem>
//           <ListItemText primary="Deck Installation" />
//         </ListItem>
//         <ListItem>
//           <ListItemText primary="Fence Installation" />
//         </ListItem>
//         <ListItem>
//           <ListItemText primary="Plumbing" />
//         </ListItem>
//         <ListItem>
//           <ListItemText primary="Painting" />
//         </ListItem>
//         <ListItem>
//           <ListItemText primary="Electrical Work" />
//         </ListItem>
//       </List>
//     </Container>
//   );
// };

// export default Services;
