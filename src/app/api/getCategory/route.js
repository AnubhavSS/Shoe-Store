import { NextResponse } from "next/server";

import connectDb from "../../../../middleware/mongoose";

import Categories from "../../../../models/Categories";
export async function GET(request) {
    try {
        // Assuming `Product.find()` returns a promise
        await connectDb()
        const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')
 
  const products = await Categories.find({category:category});
 
        // Return the fetched products in the response
        return NextResponse.json(products);
    } catch (error) {
        console.error(error);
        
        // Handle errors appropriately, e.g., return an error response
        return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }
}
