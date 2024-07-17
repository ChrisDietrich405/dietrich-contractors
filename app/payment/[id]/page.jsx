"use client";
import { Elements, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { useParams } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { useState, useEffect } from "react";
import CheckoutForm from "../../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51PaKH7JR3moazysFldj4v1zt78QQgEdjiuLaJH9FuN5B7FOgtcRPFteOWyxLaz8IsJb8tLYB2o2JcLEpDBCwq2yb00LwytnLeQ"
);

export default function Payment() {
  const [options, setOptions] = useState("");

  const params = useParams();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await fetch(
        `http://localhost:3000/api/payment/${params.id}`
      );
      const data = await response.json();
      setOptions({ clientSecret: data.clientSecret });
    };

    getClientSecret();
  }, []);

  return (
    options && (
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    )
  );
}
