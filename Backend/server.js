const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./src/routes/routes');

const port = process.env.PORT || 8080;
const app = express();

mongoose.connect('',{ useNewUrlParser: true, useUnifiedTopology: true }, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Database conected');
    }
});

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);

app.listen(port, ()=>{
    console.log('Server Runing on port 8080')
})


