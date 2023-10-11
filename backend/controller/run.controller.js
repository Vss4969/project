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
        const {filePath, inpPath} = await generateFile(language, code, input);
        // Only compile for non-interpreted languages
        let execPath = filePath;
        if(language==='cpp' || language==='c'){
            execPath = await compileFile(language, filePath);
        }
        // Execute for all languages
        const output = await runFile(language, execPath, inpPath);
        res.json({filePath, output});
    } catch (error) {
        console.log("Error while compiling: ", error.message);
        return res.status(500).json({success: false, error: error.message});
    }
};