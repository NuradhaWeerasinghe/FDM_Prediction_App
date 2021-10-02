const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); //use for convert json format to javaScript
const cors = require('cors');

const app = express();

//import routes
const customerRoutes = require('./routes/customers');

//app middleware
app.use(bodyParser.json());
app.use(cors());

//roote middleware
app.use(customerRoutes);




const PORT = 8000;// sever port
const DB_URL = `mongodb+srv://rishan_sujeewa:Rishan!1997@cluster0.7efax.mongodb.net/FDM?retryWrites=true&w=majority`; 

//crate options
mongoose.connect(DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify: false
    
})


//db Connection
mongoose.connect(DB_URL)
.then(()=>{
    console.log('MongoDB Connected!');
})
.catch((err)=> console.log('DB Connection Error!',err));                 

app.listen(PORT, ()=>{
         console.log(`App is running on ${PORT}`);
});