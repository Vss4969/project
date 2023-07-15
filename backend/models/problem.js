import mongoose from 'mongoose';

const problemSchema = new mongoose.Scheme({
    problem_id: {
        type: Number,
        required: true,
        unique: true
    },

    title: {
        type: String,
        required: true
    },

    statement: {
        description: {
            type: String,
            required: true
        },
        constraints: {
            type: String,
            required: true
        },
    }
});

const  Problem = mongoose.model('Problem', problemSchema);

export default Problem;