require('dotenv').config()
const express = require('express')
const app = new express()
const ProductRouter=require('./src/routes/productRouter')
const path = require('path');
const cors = require("cors");
const port=process.env.PORT || 8000




//Middleware
app.use(cors({ 
    origin:'http://localhost:3000',
    credentials: true 
  }));
app.use(express.static(__dirname + '/public'))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/product',ProductRouter)


app.get('/',(req,res) => {

    res.send("index")

})



app.listen(port,()=>{
    console.log('server connected at  PORT'+port);
})

