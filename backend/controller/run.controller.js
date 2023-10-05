import compileFile from '../utils/compileFiles.js';
import generateFile from '../utils/generateFile.js';
import runFile from '../utils/runFile.js';

export const getOutput = async (req, res) => {
    const {language, code, input} = req.body;
    if (code === undefined){
        return res.status(404).json({success: false, error: "Code not found"});
    }
    if (input === undefined){
        return res.status(404).json({success: false, error: "Input not found"});
    }
    try {

        const {filePath, inpPath} = await generateFile('cpp', code, input);
        const execPath = await compileFile(filePath);
        const output = await runFile(execPath, inpPath);
        res.json({filePath, output});
    } catch (error) {
        console.log("Error while compiling: ", error.message);
        return res.status(500).json({success: false, error: error.message});
    }
};