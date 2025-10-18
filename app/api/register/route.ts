import { NextRequest, NextResponse } from "next/server";
import db from "@/app/lib/db";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  const { name, email, username, password } = await request.json();
  console.log(name);
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    await db`INSERT INTO users (email, username, password, name) VALUES (${email}, ${username}, ${hashedPassword}, ${name})`;
  } catch (error) {
    return NextResponse.json(
      {
        message:
          "Registration failed. Email or username may already be in use.",
      },
      { status: 400 }
    );
  }

  return NextResponse.json({ message: "All good" });
}
