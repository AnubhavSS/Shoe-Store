import { NextResponse } from "next/server";
import Product from "../../../../models/Product";
import connectDb from "../../../../middleware/mongoose";
export async function GET() {
    try {
        // Assuming `Product.find()` returns a promise
        await connectDb()
        const products = await Product.find();
    
        // Return the fetched products in the response
        return NextResponse.json(products);
    } catch (error) {
        console.error(error);
        
        // Handle errors appropriately, e.g., return an error response
        return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }
}
