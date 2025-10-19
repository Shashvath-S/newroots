import db from "@/app/lib/db";
import { NextResponse } from "next/server";
import { auth } from "@/auth";

type DemographicsBody = {
  age: number;
  gender: string;
  location: string;
  ethnicity: string;
  interests: string[];
  language: string;
  immigrationStatus: string;
  description: string;
};

export async function POST(req: Request) {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  try {
    const body = await req.json();

    // Basic validation
    if (
      typeof body.age !== "number" ||
      !body.gender ||
      !body.location ||
      !body.ethnicity ||
      !Array.isArray(body.interests) ||
      !body.languages ||
      body.immigrationStatus == ""
    ) {
      return NextResponse.json(
        { message: "Invalid request body" },
        { status: 400 }
      );
    }

    const demographics: DemographicsBody = {
      age: body.age,
      gender: String(body.gender),
      location: String(body.location),
      ethnicity: String(body.ethnicity),
      interests: body.interests.map(String),
      language: body.languages.map(String),
      immigrationStatus: String(body.immigrationStatus),
      description: String(body.description),
    };

    await db`UPDATE users SET demographics = ${JSON.stringify(
      demographics
    )}::jsonb WHERE id = ${session.user.id}`;

    return NextResponse.json(
      { message: "Demographics saved", data: demographics },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
