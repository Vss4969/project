import bcrypt from 'bcryptjs';

const encPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log("Hashed Password: ", hashedPassword);
        return hashedPassword;
    } catch (err) {
        console.log("Error while hashing password: ", err.message);
        return err.message;
    }
};

const decPassword = async (password, hashedPassword) => {
    try {
        const isMatch = await bcrypt.compare(password, hashedPassword);
        // console.log("Is password matched: ", isMatch);
        return isMatch;
    } catch (err) {
        console.log("Error while comparing password: ", err.message);
        return err.message;
    }
};

export { encPassword, decPassword };
