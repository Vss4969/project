import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true
    },
});

//static signup method
userSchema.statics.signup = async function (userId, name, email, password) {
    //validation
    if(!email || !password || !userId || !name){
        throw Error('All fields are required!');
    }
    if(!validator.isEmail(email)){
        throw Error('Email is invalid!');
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password is not strong enough!');
    }

    const exists = await this.findOne({ $or: [{ email }, { userId }] });
    if (exists) {
        if(exists.userId === userId){
            throw Error('User Id already exists!');
        } else if (exists.email === email){
            throw Error('Email already exists');
        }
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ userId, name, email, password: hash });
    return user;
};

//static login method 
userSchema.statics.login = async function (userId, password) {
    if(!userId || !password){
        throw Error('All fields are required!');
    }

    const user = await this.findOne({ userId });
    if (!user) {
        throw Error("User doesn't exist!");
    }

    const match = await bcrypt.compare(password, user.password);

    if(!match){
        throw Error('Incorrect password!');
    }

    return user;
};

const User = mongoose.model('User', userSchema);

export default User;