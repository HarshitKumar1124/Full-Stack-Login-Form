const express = require('express');

const app = express();

const path= require('path');

//***********Importing Database File */

require('./Database/Connection.js');


// ***********************************

const staticPath= path.join(__dirname,'../public');

app.use(express.static(staticPath));  //bydeafult take index.html in public


app.get('/',(req,res)=>{
    res.send('Welcome To The Full Stack LoginForm Project')
})

const Port=process.env.PORT || 8784;

app.listen(Port,()=>{
    console.log('Server Connection Established !');
})