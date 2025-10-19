import db from "@/app/lib/db";
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();

  const getDemographics =
    await db`SELECT demographics FROM users WHERE id = ${session?.user?.id}`;
  return NextResponse.json({
    data: getDemographics[0].demographics,
  });
}
