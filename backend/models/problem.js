import mongoose from 'mongoose';

const problemSchema = new mongoose.Schema({
    problem_id: {
        type: Number,
    },
    title: {
        type: String,
    },
    statement: {
        description: {
            type: String,
        },
        constraints: {
            type: String,
        },
    },
});

const  Problem = mongoose.model('problem_set', problemSchema);

export default Problem;