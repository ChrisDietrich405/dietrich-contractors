"use client";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useState, useEffect } from "react";

import { PaymentElement, useStripe } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51PaKH7JR3moazysFldj4v1zt78QQgEdjiuLaJH9FuN5B7FOgtcRPFteOWyxLaz8IsJb8tLYB2o2JcLEpDBCwq2yb00LwytnLeQ"
);

export default function Payment() {
  const [options, setOptions] = useState(null);

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "https://localhost:3000",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  useEffect(() => {
    const getClientSecret = async () => {
      const response = fetch("http://localhost:3000/api/payment");
      return response.clientSecret;
    };
    setOptions({ clientSecret: getClientSecret() });
  }, []);

  return (
    options && (
      <Elements stripe={stripePromise} options={options}>
        <form onSubmit={handleSubmit}>
          <PaymentElement />
          <button>Submit</button>
        </form>
      </Elements>
    )
  );
}
