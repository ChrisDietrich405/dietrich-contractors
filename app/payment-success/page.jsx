"use client";
import axios from "axios"
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const PaymentSuccess = () => {
  const searchParams = useSearchParams();

  const clientSecret = searchParams.get("payment_intent_client_secret");

  const clientSecretToBackend = async () => {
    const response = await axios.put(
      `http://localhost:3000/api/payment/${clientSecret}`,
      {}
    );
    console.log(response);
    return response;
  };

  useEffect(() => {
    clientSecretToBackend();
  }, []);

  return <div>PaymentSuccess</div>;
};

export default PaymentSuccess;
