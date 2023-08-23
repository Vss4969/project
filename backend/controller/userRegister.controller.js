import User from "../models/users.js";
import { encPassword } from "../utils/crypto.js";

export const userRegister = async (req, res) => {
    const {userId, name, email, password} = req.body;

    // If any of the fields are undefined or empty
    if (!name || !email || !password || !userId) {
        return res.status(400).json({ success: false, error: "Name, email, userId, or password not found" });
    }

    try {
        // Check if the user already exists by email or userId
        const existingUser = await User.findOne({ $or: [{ email }, { userId }] });

        if (existingUser) {
            if (existingUser.userId === userId) {
                return res.status(409).json({ success: false, error: "User with this userId already exists" });
            } else if (existingUser.email === email) {
                return res.status(409).json({ success: false, error: "User with this email already exists" });
            }
        }

        const user = await User.create({ userId, name, email, password: await encPassword(password) });
        res.json({ success: true, user });
    } catch (error) {
        console.log("Error while registering: ", error.message);
        return res.status(500).json({success: false, error: error.message});
    }
};