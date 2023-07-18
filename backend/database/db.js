import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    const MONGO_URI = process.env.MONGODB_URL;
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            dbName: 'oj_project',
        });
        console.log("Connected to DB")
    } 
    catch (error) {
        console.log("Error while connecting to DB", error.message);
    }
};

export default DBConnection;