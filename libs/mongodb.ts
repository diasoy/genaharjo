import mongoose from "mongoose";

const connectMongoDB = async () => {
    const mongoDBUri = process.env.MONGODB_URI || "mongodb://localhost:27017/genaharjo";
    try {
        await mongoose.connect(mongoDBUri);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection failed", error);
    }
}

export default connectMongoDB;