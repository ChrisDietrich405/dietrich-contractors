import dbConnection from "../../config/db";
import AdminModel from "../../models/admin";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import * as jwt from "jose";

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
    const secret = new TextEncoder().encode(process.env.JWT_SECRET); // Convert the secret to Uint8Array
    const jwtToken = await new jwt.SignJWT({ id: adminFound.id })
      .setProtectedHeader({ alg: "HS256", typ: "JWT" }) // Set the algorithm and token type
      .setIssuedAt() // Set the issued at claim
      .setExpirationTime("2d") // Set the expiration time
      .sign(secret); // Sign the token with the secret

    db.connection.close();
    return NextResponse.json({ jwtToken });
  } catch (error) {
    console.error("Error parsing request body:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
