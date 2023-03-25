const express = require('express');
const app = express();
const Port = process.env.Port || 8000;
require('./db/db');
const MensRanking = require('./models/mens');
const mensRouter = require('./routers/mensRouters');


app.use(express.json())
app.use(mensRouter);

app.get('/',(req, res)=>{
    res.send('<h1>hello from server</h1>');
})


app.listen(Port,(req,res)=>{
    console.log(`server is running on port ${Port}`);
})
