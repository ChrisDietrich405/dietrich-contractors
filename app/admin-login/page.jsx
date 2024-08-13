// "use client";
// import * as React from "react";
// import {
//   FormControl,
//   InputLabel,
//   FormHelperText,
//   Input,
//   Button,
// } from "@mui/material";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { UserContext } from "../context/UserContext";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import styles from "./styles.module.css";

// const defaultState = {
//   email: "",
//   password: "",
// };

// const AdminLogin = () => {
//   const [formData, setFormData] = React.useState(defaultState);
//   const { setIsLoggedIn, logOutUser } = React.useContext(UserContext);

//   const router = useRouter();

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   React.useEffect(() => {
//     logOutUser();
//   }, []);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:3000/api/admin-login",
//         formData
//       );

//       localStorage.setItem("token", response.data.jwtToken);
//       setIsLoggedIn(true);
//       router.push("/admin-bill");
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   return (
//     <div className={styles.form_container}>
//       <form onSubmit={handleSubmit}>
//         <h1>Admin login</h1>
//         <ToastContainer />
//         <FormControl>
//           <InputLabel htmlFor="email-input">Email address</InputLabel>
//           <Input
//             id="email-input"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             aria-describedby="email-helper-text"
//           />
//           <FormHelperText id="email-helper-text">
//             We'll never share your email.
//           </FormHelperText>
//         </FormControl>
//         <FormControl>
//           <InputLabel htmlFor="password-input">Password</InputLabel>
//           <Input
//             id="password-input"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             aria-describedby="password-helper-text"
//           />
//         </FormControl>

//         <Button type="submit" variant="contained">
//           Submit
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default AdminLogin;

"use client";

import * as React from "react";
import {
  FormControl,
  InputLabel,
  FormHelperText,
  Input,
  Button,
  Box,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { UserContext } from "../context/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./styles.module.css";

const defaultState = {
  email: "",
  password: "",
};

const AdminLogin = () => {
  const [formData, setFormData] = React.useState(defaultState);
  const { setIsLoggedIn, logOutUser } = React.useContext(UserContext);
  const router = useRouter();

  React.useEffect(() => {
    logOutUser();
  }, []);

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
      setIsLoggedIn(true);
      router.push("/admin-bill");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 8, marginBottom: 10 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: "10px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Admin Login
        </Typography>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel htmlFor="email-input">Email address</InputLabel>
            <Input
              id="email-input"
              name="email"
              value={formData.email}
              onChange={handleChange}
              aria-describedby="email-helper-text"
              sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.42)" }}
            />
            <FormHelperText id="email-helper-text">
              We'll never share your email.
            </FormHelperText>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel htmlFor="password-input">Password</InputLabel>
            <Input
              id="password-input"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              aria-describedby="password-helper-text"
              sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.42)" }}
            />
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              py: 1.5,
              textTransform: "uppercase",
              fontWeight: "bold",
              backgroundColor: "#323c53",
            }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default AdminLogin;
