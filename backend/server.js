import express from 'express';
import router from './routes/routes.js';
import DBConnection from './database/db.js';

const app = express();

// app.get('/', (req, res) => {
//     res.send('This is backend :)');
// })

app.use('/', router);

DBConnection();

app.listen(8000, ()=>{
    console.log("Server is running on port 8000!");
});