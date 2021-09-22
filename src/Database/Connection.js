const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Registrants',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Database Connected !')
}).catch((err)=>{
 console.log(`Error in connecting Database due to ${err}`)
})