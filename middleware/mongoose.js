import mongoose from "mongoose";

// Define a function to connect to the database
const connectDb = async (handler) => {
  // Check if the connection is already established
  if (mongoose.connections[0].readyState === 1) {
    // console.log("Database connection is already established.");
    return handler;
  }

  // Set up event listeners to monitor the connection status
  mongoose.connection.on("connected", () => {
    // console.log("Connected to the database.");
  });

  mongoose.connection.on("error", (err) => {
    // console.error("Database connection error:", err);
  });

  mongoose.connection.on("disconnected", () => {
    // console.log("Disconnected from the database.");
  });

  // Attempt to connect to the MongoDB database
  await mongoose.connect('mongodb+srv://chikkubhav:DlrzVPIBLRwwNfrl@shoestore.3j63fzw.mongodb.net/ShoeStore?retryWrites=true&w=majority');

  // Return the handler function
  return handler;
};

export default connectDb;
