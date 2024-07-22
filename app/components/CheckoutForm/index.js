"use client";
import {
  useElements,
  useStripe,
  PaymentElement,
} from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripeInstance = useStripe();

  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const result = await stripeInstance.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/payment-success",
      },
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button>Submit</button>
    </form>
  );
};

export default CheckoutForm;
