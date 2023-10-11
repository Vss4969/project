import fs from 'fs';
import path from 'path';
import { v4 as uuid } from 'uuid';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { execPath } from 'process';

const runFile = async(language, execPath, inpPath) => {
    //Run c and cpp executable files
    if(language === 'cpp' || language === 'c'){
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
    }
    //Run java class files
    if(language === 'java'){
        return new Promise((resolve, reject) => {
            exec(
                `java ${execPath} < ${inpPath}`,
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
    }
    //Run python files
    if(language === 'py'){
        return new Promise((resolve, reject) => {
            exec(
                `python ${execPath} < ${inpPath}`,
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
    }
};

export default runFile;