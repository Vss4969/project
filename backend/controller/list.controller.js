import ProblemSet from '../models/problem.js'

export const getList = async (request, response) => {
    try{
        const problems = await ProblemSet.find().select('problem_id title');
        response.json(problems);
    } catch(error){
        console.log("Error in getList: ", error.message);
        response.status(500).json({error : error.message});
    }
}