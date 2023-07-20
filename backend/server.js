import express from 'express';
import router from './routes/routes.js';
import DBConnection from './database/db.js';
import cors from 'cors';
import generateFile from './utils/generateFile.js';
import compileFile from './utils/compileFiles.js';
const app = express();


app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//using router to navigate
app.use('/', router);

DBConnection();

app.get('/', (req, res) => {  
    res.send("Hello World!");
});

app.post("/run", async (req, res) => {
    const {language = 'cpp', code} = req.body;
    if (code === undefined){
        return res.status(404).json({success: false, error: "Code not found"});
    }
    try {
        const filePath = await generateFile('cpp', code);
        const output = await compileFile(filePath);
        // console.log(output);
        res.json({filePath, output});
    } catch (error) {
        return res.status(500).json({success: false, error: error.message});
    }
})

app.listen(8000, ()=>{
    console.log("Server is running on port 8000!");
});

