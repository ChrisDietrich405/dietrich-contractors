import dbConnection from "../../config/db";
import AdminModel from "../../models/admin";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req, res) {
  try {
    const data = await req.json();
    const db = await dbConnection();
    const adminFound = await AdminModel.findOne({ email: data.email });

    const isPasswordCorrect = await bcrypt.compare(
      data.password,
      adminFound.password
    );
    if (!isPasswordCorrect) {
      return NextResponse.json(
        { message: "User not authenticated" },
        { status: 401 }
      );
    }
    const jwtToken = jwt.sign({ id: adminFound.id }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });

    db.connection.close();
    return NextResponse.json({jwtToken});
  } catch (error) {
    console.error("Error parsing request body:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
