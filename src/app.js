const express = require('express');

const app = express();

const path= require('path');

const hbs = require('hbs');


//Data Hashing for securing passwords in DataBase we use Bcrypt.js
const Bcrypt = require('bcryptjs');


//***********Importing Database File */

require('./Database/Connection.js');

const CollectionUser = require('./Model/Registrants')


// ***********************************

const staticPath= path.join(__dirname,'../public');

app.use(express.static(staticPath));  //bydeafult take index.html in public

const hbs_partials=path.join(__dirname,"../views/partials");

//To get input values from url

app.use(express.urlencoded({extended:false}))



app.set("view engine","hbs");
hbs.registerPartials(hbs_partials);

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/login',(req,res)=>{
    res.send('login Portal')
})

app.post('/registrants',async (req,res)=>{
    
    try{
         
        const password = req.body.Password;
        const confirmPassword = req.body.ConfirmPassword;

        if(password===confirmPassword)
        {
            
             const UserInstance = new CollectionUser({
                Name:req.body.FirstName + req.body.LastName,
                EmailID:req.body.EmailID,
                MobileNo:req.body.MobileNo,
                Password:password,
                
                Gender:req.body.Gender,
                Age:req.body.Age,
                ConfirmPassword:confirmPassword
             })

              //Database Password Hashing using Bcrypt
              //whose function is defined in Schema Model
              //Defination File. This function is example of 
              //middleware. This is automatically call before specified event




             //inserting In Database

             const registering = await UserInstance.save();
             res.status(200).send('Success Submission');
        }
        else
        req.send("Oops Password Not Matching");

    }catch(err)
    {
        res.send(err);
    }
    

})

const Port=process.env.PORT || 8784;

app.listen(Port,()=>{
    console.log('Server Connection Established !');
})