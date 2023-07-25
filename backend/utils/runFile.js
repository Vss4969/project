import fs from 'fs';
import path from 'path';
import { v4 as uuid } from 'uuid';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { execPath } from 'process';

const runFile = async(execPath, inpPath) => {
    return new Promise((resolve, reject) => {
        exec(
            `${execPath} < ${inpPath}`,
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

export default runFile;