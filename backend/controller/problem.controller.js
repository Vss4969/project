import ProblemSet from '../models/problem.js'

export const getProblemDetails = async (request, response) => {
    const { problemId } = request.params;
    try{
        const problem = await ProblemSet.findOne({ problem_id: problemId });
        response.json(problem);
    } catch(error){
        console.log("Error in getList: ", error.message);
        response.status(500).json({error : error.message});
    }
}