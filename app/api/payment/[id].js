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
    await dbConnection();
    const foundCustomer = await CustomerBillModel.findOne({
      _id: ObjectId(req.params.id),
    });
    return NextResponse.json(foundCustomer);
  } catch (error) {
    console.log(error);
  }
}
