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
        return_url: "https://localhost:3000/payment-success",
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

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button>Submit</button>
    </form>
  );
};

export default CheckoutForm;
