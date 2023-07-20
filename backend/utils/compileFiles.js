import fs from 'fs';
import path from 'path';
import { v4 as uuid } from 'uuid';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dirCompile = path.join(__dirname, '../user_workspace/compiles');

if (!fs.existsSync(dirCompile)) {
    fs.mkdirSync(dirCompile, { recursive: true });
}

const compileFile = async(filePath) => {
    const jobId = path.basename(filePath).split('.')[0];
    const outPath = path.join(dirCompile, `${jobId}.exe`);
    return new Promise((resolve, reject) => {
        exec(
            `g++ ${filePath} -o ${outPath} && cd ${dirCompile} && .\\${jobId}.exe`,
            (error, stdout, stderr) => {
                if(error){
                    reject({error, stderr});
                }
                if(stderr){
                    reject(stderr);
                }
                resolve(stdout);
            }
        );
    });
};

export default compileFile;