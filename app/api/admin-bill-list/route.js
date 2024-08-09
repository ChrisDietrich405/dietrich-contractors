import dbConnection from "../../config/db";
import CustomerBillModel from "../../models/customerBill";
import { NextResponse } from "next/server";



export async function GET(req, res) {
  try {
    const db = await dbConnection();
    const bills = await CustomerBillModel.find();

    db.connection.close();
    return NextResponse.json(bills, { status: 200 });
  } catch (error) {
    console.error("Error parsing request body:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
