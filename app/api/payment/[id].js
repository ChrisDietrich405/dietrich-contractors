import dbConnection from "../../config/db";
import CustomerBillModel from "../../models/customerBill";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

import { Stripe } from "stripe";

const stripe = new Stripe(
  "sk_test_51PaKH7JR3moazysFGOYUTVDq7pBEReSJx45sIPCqBqngKUnLlYE5d8hWnF9mUtGGXEiZqNLbPsCehY1tYESN6Cn200dMANNtIs"
);

export async function GET(req, res) {
  try {
    console.log("HELLO", req.query);
    await dbConnection();
    const foundCustomer = await CustomerBillModel.findOne({
      _id: ObjectId(req.params.id),
    });
    console.log(foundCustomer);
    // return NextResponse.json(foundCustomer, { status: 201 });
  } catch (error) {
    console.log(error);
  }
  // const paymentIntent = await stripe.paymentIntents.create({
  //   amount: 200,
  //   currency: "usd",
  //   automatic_payment_methods: { enabled: true },
  // });
  // return Response.json({ clientSecret: paymentIntent.client_secret });
}
