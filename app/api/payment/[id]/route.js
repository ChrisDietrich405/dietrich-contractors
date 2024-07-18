import dbConnection from "../../../config/db";
import CustomerBillModel from "../../../models/customerBill";
import { NextResponse } from "next/server";

import { Stripe } from "stripe";

const stripe = new Stripe(
  "sk_test_51PaKH7JR3moazysFGOYUTVDq7pBEReSJx45sIPCqBqngKUnLlYE5d8hWnF9mUtGGXEiZqNLbPsCehY1tYESN6Cn200dMANNtIs"
);

export async function GET(req, query) {
  try {
    await dbConnection();
    const foundCustomerBill = await CustomerBillModel.findOne({
      _id: query.params.id,
    });

    if (!foundCustomerBill) {
      return NextResponse.json(
        { message: "customer bill not found" },
        { status: 404 }
      );
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: foundCustomerBill.amount * 100,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });

    if (!paymentIntent) {
      return NextResponse.json(
        { message: "Payment failed. Try again" },
        { status: 400 }
      );
    }

    foundCustomerBill.clientSecret = paymentIntent.client_secret;
    foundCustomerBill.save()
    // we need this in order to have our payment success page because we will be using the foundCustomerBill.clientSecret for that page+


    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      //cart id - used for authorization
      customerBill: foundCustomerBill,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Payment failed. Try again" },
      { status: 400 }
    );
  }
}
