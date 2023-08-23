import User from "../models/users.js";
import { decPassword } from "../utils/crypto.js";

export const userLogin = async (req, res) => {
    const {userId, password} = req.body;

    // If any of the fields are undefined
    if (userId === undefined || password === undefined){
        return res.status(404).json({success: false, error: "Userid or password not found"});
    }
    // If the user is not registered
    try{
        const user = await User.findOne({userId});
        if (!user){
            return res.status(404).json({success: false, error: "User not found"});
        }
        // If the password is incorrect
        if ( !(await decPassword(password, user.password))){
            return res.status(401).json({success: false, error: "Incorrect password"});
        }

        // If the user is registered and password is correct
        // Create a session
        req.session.user = user;
        console.log("Session created for user");
        res.json({success: "Login successfull", user});
        console.log("Login successfull");
    } catch (error) {
        console.log("Error while logging in: ", error.message);
        return res.status(500).json({success: false, error: error.message});
    }
};