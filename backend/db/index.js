import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

let isConnected = false;

const connectDB = async () => {

    if( !isConnected ) {
        try {
            await mongoose.connect(process.env.MONGODB_URL);
            isConnected = true;
            console.log("Connected to MongoDB");
        } catch (error) {
            console.error("Error connecting to MongoDB:", error);
        }
    }
};

export default connectDB;