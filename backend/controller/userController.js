import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1d" })
}

const loginUser = async (req, res) => {
    const { userId, password } = req.body;
    try {
        const user = await User.login(userId, password);

        const token = createToken(user._id);

        res.status(200).json({userId, token});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const signupUser = async (req, res) => {
    const { userId, name, email, password } = req.body;
    try {
        const user = await User.signup(userId, name, email, password);

        const token = createToken(user._id);

        res.status(200).json({userId, email, token});
    } catch (error) {
        res.status(400).json({error: error.message});
    }

};

export { loginUser, signupUser };