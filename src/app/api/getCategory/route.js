import { NextResponse } from "next/server";

import connectDb from "../../../../middleware/mongoose";
import Categories from "../../../../models/Categories";

export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    await connectDb();

    const category =
      request.nextUrl.searchParams.get("category");

    const products = await Categories.find({
      category: category,
    });

    return NextResponse.json(products);

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "An error occurred" },
      { status: 500 }
    );
  }
}