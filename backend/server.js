import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send('This is backend :)');
})

app.listen(8000, ()=>{
    console.log("Server is running on port 8000!");
})