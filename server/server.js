if(process.env.NODE_ENV !== 'production')
    require('dotenv').config()

//Dependencies
const express = require('express');
const cors = require('cors');
// Files
const db=require('./database');


//Routes
const authRoute= require('./routes/auth.route')

db.connect((err) => {
    if (err) {
        console.log(err);
        throw err;
    }
    console.log('MySql Connected...');
})
const app =express();
app.use(express.json())
app.use(cors())
app.use('/api',authRoute);

app.listen(process.env.PORT,()=>{
    console.log(`Server listening on port ${process.env.PORT}`)
})