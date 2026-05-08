import { NextResponse } from "next/server";

import connectDb from "../../../../middleware/mongoose";
import Categories from "../../../../models/Categories";

export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    await connectDb();

    const title = request.nextUrl.searchParams.get("title");

    const products = await Categories.find({
      title: decodeURIComponent(title),
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