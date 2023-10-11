import compileFile from '../utils/compileFiles.js';
import generateFile from '../utils/generateFile.js';
import runFile from '../utils/runFile.js';
import fs from 'fs/promises';

export const getVerdict = async (req, res) => {
    const { language, code, pid } = req.body;
    if (code === undefined) {
        return res.status(404).json({ success: false, error: "Code not found" });
    }
    try {
        const {filePath} = await generateFile('cpp', code, undefined);
        console.log("File generated successfully");
        let execPath = filePath;
        if(language==='cpp' || language==='c'){
            execPath = await compileFile(language, filePath);
        }
        console.log("File compiled successfully");
        const inputsFolderPath = `./data/problems/${pid}/inputs`;
        const outputsFolderPath = `./data/problems/${pid}/outputs`;

        const inputFiles = await fs.readdir(inputsFolderPath);
        let allTestCasesPassed = true;
        let i = 1;

        for (const inputFile of inputFiles) {
            try {
                const inputPath = `${inputsFolderPath}/${inputFile}`;
                const outputPath = `${outputsFolderPath}/output${inputFile.match(/\d+/)[0]}.txt`;

                const output = await runFile(language, execPath, inputPath);
                const expectedOutput = await fs.readFile(outputPath, 'utf-8');

                if (output.trim() !== expectedOutput.trim()) {
                    allTestCasesPassed = false;
                    break;
                }
            } catch (error) {
                console.log(`Error while running test case ${inputFile}:`, error.message);
                return res.status(500).json({ success: false, error: error.message });
            }
        }

        if (allTestCasesPassed) {
            res.json({ filePath, output: 'Successful' });
        } else {
            res.status(400).json({ success: false, error: 'Test cases failed' });
        }

    } catch (error) {
        console.log("Error while compiling: ", error.message);
        return res.status(500).json({ success: false, error: error.message });
    }
};