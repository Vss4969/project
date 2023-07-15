import mongoose from 'mongoose';

const testCases = new mongoose.Scheme({
    problem_id: {
        type: Number,
        required: true,
        unique: true
    },

    input_file: {
        type: String,
        required: true
    },

    output_file: {
        type: String,
        required: true
    }
});

const  TestCases = mongoose.model('TestCases', testCases);

export default TestCases;