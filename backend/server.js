import express from 'express';
import router from './routes/routes.js';
import userRouter from './routes/user.js';
import DBConnection from './database/db.js';
import cors from 'cors';
const app = express();

// For session management
import cookieParser from 'cookie-parser';
import session from 'express-session';

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
 
//Session Initialization
app.use(cookieParser());
app.use(session({
    secret: 'your_secret_key_here',
    resave: false,
    saveUninitialized: false 
}));

//using router to navigate
app.use('/', router);
app.use('/user', userRouter);

DBConnection();

app.listen(8000, ()=>{
    console.log("Server is running on port 8000!");
});

