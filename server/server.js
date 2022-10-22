if(process.env.NODE_ENV !== 'production')
    require('dotenv'.config())
//Dependencies
const express = require('express');

//Routes
const authRoute= require('./routes/auth.route')

const app =express();
app.use(express.json())
app.use('/api',authRoute);

app.listen(process.env.PORT,()=>{
    console.log(`Server listening on port ${process.env.PORT}`)
})