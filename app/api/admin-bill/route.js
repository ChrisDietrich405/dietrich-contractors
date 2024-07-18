import dbConnection from "../../config/db";
import CustomerBillModel from "../../models/customerBill";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const data = await req.json();
    const db = await dbConnection();
    const customerBill = new CustomerBillModel({
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
      service: data.service,
      amount: data.amount,
      status: "pending"
    });

    await customerBill.save();

    db.connection.close();
    return NextResponse.json(customerBill, { status: 201 });
  } catch (error) {
    console.error("Error parsing request body:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
