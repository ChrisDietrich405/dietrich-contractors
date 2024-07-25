"use client";
import { useState } from "react";
import {
  FormControl,
  InputLabel,
  FormHelperText,
  Input,
  Button,
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./styles.module.css";

const defaultState = {
  email: "",
  password: "",
};
const AdminLogin = () => {
  const [formData, setFormData] = useState(defaultState);

  const router = useRouter();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/admin-login",
        formData
      );

      localStorage.setItem("token", response.data.jwtToken);

      router.push("/admin-bill");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className={styles.form_container}>
      <form onSubmit={handleSubmit}>
        <h1>Admin login</h1>
        <ToastContainer />
        <FormControl>
          <InputLabel htmlFor="email-input">Email address</InputLabel>
          <Input
            id="email-input"
            name="email"
            value={formData.email}
            onChange={handleChange}
            aria-describedby="email-helper-text"
          />
          <FormHelperText id="email-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password-input">Password</InputLabel>
          <Input
            id="password-input"
            name="password"
            value={formData.password}
            onChange={handleChange}
            aria-describedby="password-helper-text"
          />
        </FormControl>

        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AdminLogin;
