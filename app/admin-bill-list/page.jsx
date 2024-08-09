"use client";
import * as React from "react";
import {
  FormControl,
  InputLabel,
  FormHelperText,
  Input,
  Button,
} from "@mui/material";
import axios from "axios";

import { useRouter } from "next/navigation";
import { UserContext } from "../context/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./styles.module.css";

const AdminBillList = () => {
  const [bills, setBills] = React.useState([]);

  const router = useRouter();

  const handleBillList = async (token) => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/admin-bill-list",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBills(response.data);
    } catch (error) {
      console.log(error);
      // toast.error(error.response.data.message);
    }
  };

  React.useEffect(() => {
    const tokenId = localStorage.getItem("token");
    if (!tokenId) {
      router.push("/admin-login");
    }
    handleBillList(tokenId);
  }, []);

  return (
    <div style={{marginTop: "100px"}}>
      {bills.map((bill) => {
        return <h1>{bill.name}</h1>;
      })}
    </div>
  );
};

export default AdminBillList;
