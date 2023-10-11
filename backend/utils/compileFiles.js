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

const compileFile = async(language, filePath) => {
    const jobId = path.basename(filePath).split('.')[0];
    //Run cpp file with g++ compiler
    if(language === 'cpp'){
        const execPath = path.join(dirCompile, `${jobId}.exe`);
        return new Promise((resolve, reject) => {
            exec(
                `g++ ${filePath} -o ${execPath}`,
                (error, stdout, stderr) => {
                    if(error){
                        reject({error, stderr});
                    }
                    if(stderr){
                        reject(stderr);
                    }
                    resolve(execPath);
                }
            );
        });
    }
    //Run C file with gcc compiler
    if(language === 'c'){
        const execPath = path.join(dirCompile, `${jobId}.exe`);
        return new Promise((resolve, reject) => {
            exec(
                `gcc ${filePath} -o ${execPath}`,
                (error, stdout, stderr) => {
                    if(error){
                        reject({error, stderr});
                    }
                    if(stderr){
                        reject(stderr);
                    }
                    resolve(execPath);
                }
            );
        });
    }
    //Run Java file with java compiler
    if(language === 'java'){
        const execPath = path.join(dirCompile, `${jobId}.class`);
        return new Promise((resolve, reject) => {
            exec(
                `javac ${filePath}`,
                (error, stdout, stderr) => {
                    if(error){
                        reject({error, stderr});
                    }
                    if(stderr){
                        reject(stderr);
                    }
                    resolve(execPath);
                }
            );
        });
    }
};

export default compileFile;