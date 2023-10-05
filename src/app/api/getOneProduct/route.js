import { NextResponse } from "next/server";

import connectDb from "../../../../middleware/mongoose";
import Categories from "../../../../models/Categories";
export async function GET(request) {
    try {
        // Assuming `Product.find()` returns a promise
        await connectDb()
        const { searchParams } = new URL(request.url)
  const title = searchParams.get('title')

 const convertedString = decodeURIComponent(title).replace('%20', ' ');
  const products = await Categories.find({title:convertedString});
 
        // Return the fetched products in the response
        return NextResponse.json(products);
    } catch (error) {
        console.error(error);
        
        // Handle errors appropriately, e.g., return an error response
        return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }
}
