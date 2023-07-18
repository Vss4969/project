import express from 'express';
import router from './routes/routes.js';
import DBConnection from './database/db.js';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//using router to navigate
app.use('/', router);

DBConnection();

app.listen(8000, ()=>{
    console.log("Server is running on port 8000!");
});

