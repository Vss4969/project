import mongoose from 'mongoose';

const submissionSchema = new mongoose.Schema({
    problem_id: {
        type: Number,
        required: true,
        unique: true
    },

    submission_file: {
        type: String,
        required: true
    },

    submission_time: {
        type: Date,
        required: true
    },

    verdict: {
        type: String,
        required: true
    },

    errors: {
        type: String,
        required: true
    },
});

const  Submission = mongoose.model('Submission', submissionSchema);

export default Submission;