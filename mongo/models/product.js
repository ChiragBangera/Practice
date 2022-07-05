const mongoose = require('mongoose')

const productShcema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    category:{
        type:String,
        enum:['shirt','jeans','underwear','t-shirt']
    }
})


const Product = mongoose.model('Product',productShcema)

module.exports = Product