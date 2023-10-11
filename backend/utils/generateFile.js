import fs from 'fs';
import path from 'path';
import { v4 as uuid } from 'uuid';
import { fileURLToPath } from 'url';

// Path to the directory where the files will be saved
// Doe example E:\Projects\NodeJS\backend + \submissions = E:\Projects\NodeJS\backend\submissions
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dirSubmissions = path.join(__dirname, '../user_workspace/submissions');
const userInps = path.join(__dirname, '../user_workspace/inputs');

//What if the directory doesn't exist?
if (!fs.existsSync(dirSubmissions)) {
    fs.mkdirSync(dirSubmissions, { recursive: true });
}
if (!fs.existsSync(userInps)) {
    fs.mkdirSync(userInps, { recursive: true });
}

const generateFile = async(language, code, input) => {
    const jobId = uuid(); //Unique id for ex: 1a2b3c4d2e3f4g5h6i7j8k9l
    const filename = `${jobId}.${language}`; // 1a2b3c4d2e3f4g5h6i7j8k9l.cpp
    const filePath = path.join(dirSubmissions, filename); // E:\Projects\NodeJS\backend\submissions\1a2b3c4d2e3f4g5h6i7j8k9l.cpp
    await fs.writeFileSync(filePath, code); // Write the code to the file

    if(input !== undefined){
        const inpPath = path.join(userInps, `${jobId}.txt`);
        await fs.writeFileSync(inpPath, input);
        return {filePath, inpPath};
    }
    return {filePath};
};

export default generateFile;


