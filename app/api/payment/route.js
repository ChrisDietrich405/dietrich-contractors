import { Stripe } from "stripe";

const stripe = new Stripe(
  "sk_test_51PaKH7JR3moazysFGOYUTVDq7pBEReSJx45sIPCqBqngKUnLlYE5d8hWnF9mUtGGXEiZqNLbPsCehY1tYESN6Cn200dMANNtIs"
);

export async function GET() {
  // Set your secret key. Remember to switch to your live secret key in production.
  // See your keys here: https://dashboard.stripe.com/apikeys

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 200,
    currency: "usd",
    automatic_payment_methods: { enabled: true },
  });
  return Response.json({ clientSecret: paymentIntent.client_secret });
}
