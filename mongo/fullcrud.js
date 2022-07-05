const express = require('express')
const app = express()
app.set('view engine','ejs')
const Product = require('./models/product')
const mongoose = require('mongoose')
const DB = "mongodb+srv://chiragbangera:chiragadarsh@cluster1.c3lu4j0.mongodb.net/stockStatus?retryWrites=true&w=majority"
mongoose.connect(DB,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log('Connected to MongoDB')
    })
    .catch((e)=>{
        console.log('MongoDB Not Connected')
        console.log(e)
    })


app.get('/products',async (req,res)=>{
    const products = await Product.find({})
    res.render('products/index', {products})
})













const port = 3000
app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})