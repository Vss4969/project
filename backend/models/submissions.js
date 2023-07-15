import mongoose from 'mongoose';

const submissionSchema = new mongoose.Scheme({
    problem_id: {
        type: Number,
        required: true,
        unique: true
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