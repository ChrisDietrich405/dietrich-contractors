"use client";

import {
  TextField,
  Typography,
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Services = () => {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Services
      </Typography>
      <Typography variant="h6">
        There's a reason Dietrich Contractors has more than 80 likes on Next
        Door. We provide our customers with excellent and personalized service.
        Below you will find a list of what we do. Feel free to connect with us
        any time at 443 306 5270 or through email with
        dietrichcontractors@gmail.com to get a free estimate for your next
        project.
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Kitchen Remodeling" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Bathroom Remodeling" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Deck Installation" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Fence Installation" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Plumbing" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Painting" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Electrical Work" />
        </ListItem>
      </List>
    </Container>
  );
};

export default Services;
