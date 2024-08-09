"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./styles.module.css";

const defaultState = {
  name: "",
  email: "",
  phoneNumber: "",
  service: "",
  amount: "",
};

const AdminBill = () => {
  const [formData, setFormData] = useState(defaultState);
  const [token, setToken] = useState("");
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
        "http://localhost:3000/api/admin-bill",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response) {
        const templateParams = {
          firstName: formData.name,
          lastName: "",
          email: formData.email,
          phone: formData.phoneNumber,
          service: formData.service,
          link: `http://localhost:3000/payment/${response.data._id}`,
          to_name: "Dietrich Contractors",
        };

        await emailjs.send(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_PAYMENT_TEMPLATE_ID,
          templateParams,
          process.env.NEXT_PUBLIC_USER_ID
        );
        setFormData(defaultState);
        toast.success("Bill sent to customer successfully");
      }

      return response;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const tokenId = localStorage.getItem("token");
    if (!tokenId) {
      router.push("/admin-login");
    }
    setToken(tokenId);
  }, []);

  return (
    <Container maxWidth="sm" sx={{ mt: 8, mb: 10 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: "10px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Create Bill
        </Typography>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel htmlFor="name-input">Name</InputLabel>
            <Input
              id="name-input"
              name="name"
              value={formData.name}
              onChange={handleChange}
              aria-describedby="name-helper-text"
              sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.42)" }}
            />
            <FormHelperText id="name-helper-text">
              Enter the customer's name.
            </FormHelperText>
          </FormControl>
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
              We'll never share the customer's email.
            </FormHelperText>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel htmlFor="phone-input">Phone Number</InputLabel>
            <Input
              id="phone-input"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              aria-describedby="phone-helper-text"
              sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.42)" }}
            />
            <FormHelperText id="phone-helper-text">
              Enter the customer's phone number.
            </FormHelperText>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel htmlFor="service-input">Service</InputLabel>
            <Input
              id="service-input"
              name="service"
              value={formData.service}
              onChange={handleChange}
              aria-describedby="service-helper-text"
              sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.42)" }}
            />
            <FormHelperText id="service-helper-text">
              Enter the service provided.
            </FormHelperText>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel htmlFor="amount-input">Amount</InputLabel>
            <Input
              id="amount-input"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              aria-describedby="amount-helper-text"
              sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.42)" }}
            />
            <FormHelperText id="amount-helper-text">
              Enter the bill amount.
            </FormHelperText>
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
            }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default AdminBill;


// "use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import {
//   FormControl,
//   InputLabel,
//   FormHelperText,
//   Input,
//   Button,
// } from "@mui/material";
// import axios from "axios";
// import emailjs from "@emailjs/browser";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import styles from "./styles.module.css";

// const defaultState = {
//   name: "",
//   email: "",
//   phoneNumber: "",
//   service: "",
//   amount: "",
// };
// const AdminBill = () => {
//   const [formData, setFormData] = useState(defaultState);
//   const [token, setToken] = useState("");
//   const router = useRouter();

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:3000/api/admin-bill",
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       if (response) {
//         const templateParams = {
//           firstName: formData.name,
//           lastName: "",
//           email: formData.email,
//           phone: formData.phone,
//           service: formData.service,
//           link: `http://localhost:3000/payment/${response.data._id}`,
//           to_name: "Dietrich Contractors",
//         };
//         console.log("template", templateParams);

//         await emailjs.send(
//           process.env.NEXT_PUBLIC_SERVICE_ID,
//           process.env.NEXT_PUBLIC_PAYMENT_TEMPLATE_ID,
//           templateParams,
//           process.env.NEXT_PUBLIC_USER_ID
//         );
//         setFormData(defaultState);
//         toast.success("Bill sent to customer successfully");
//       }

//       return response;
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   useEffect(() => {
//     const tokenId = localStorage.getItem("token");
//     if (!tokenId) {
//       router.push("/admin-login");
//     }
//     setToken(tokenId);
//   }, []);

//   return (
//     <div className={styles.form_container}>
//       <form onSubmit={handleSubmit}>
//         <h1>Admin Bill</h1>
//         <FormControl>
//           <InputLabel htmlFor="name-input">Name</InputLabel>
//           <Input
//             id="name-input"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             aria-describedby="name-helper-text"
//           />
//           <FormHelperText id="name-helper-text">Enter the name.</FormHelperText>
//           <ToastContainer />
//         </FormControl>
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
//           <InputLabel htmlFor="phone-input">Phone Number</InputLabel>
//           <Input
//             id="phone-input"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             aria-describedby="phone-helper-text"
//           />
//           <FormHelperText id="phone-helper-text">
//             Enter your phone number.
//           </FormHelperText>
//         </FormControl>
//         <FormControl>
//           <InputLabel htmlFor="service-input">Service</InputLabel>
//           <Input
//             id="service-input"
//             name="service"
//             value={formData.service}
//             onChange={handleChange}
//             aria-describedby="service-helper-text"
//           />
//           <FormHelperText id="service-helper-text">
//             Enter the service provided.
//           </FormHelperText>
//         </FormControl>
//         <FormControl>
//           <InputLabel htmlFor="amount-input">Amount</InputLabel>
//           <Input
//             id="amount-input"
//             name="amount"
//             value={formData.amount}
//             onChange={handleChange}
//             aria-describedby="amount-helper-text"
//           />
//           <FormHelperText id="amount-helper-text">
//             Enter the amount.
//           </FormHelperText>
//         </FormControl>
//         <Button type="submit" variant="contained">
//           Submit
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default AdminBill;
