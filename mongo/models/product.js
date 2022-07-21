const mongoose = require('mongoose')
const Shop = require('./farm')

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
        lowercase:true,
        enum:['shirt','jeans','underwear','t-shirt']
    },
    farm:{
        type:mongoose.Schema.Types.ObjectId,ref:'Shop'
    }
})


const Product = mongoose.model('Product',productShcema)

module.exports = Product