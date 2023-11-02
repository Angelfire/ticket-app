import { NextResponse } from "next/server";

import Ticket from "@/models/Ticket";

export async function POST(req: Request) {
  try {
    const json = await req.json();

    await Ticket.create(json);

    return NextResponse.json({ message: "Ticket Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const tickets = await Ticket.find();

    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
