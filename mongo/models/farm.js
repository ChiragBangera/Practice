const mongoose = require('mongoose')
const Product = require('./product')

const shopSchema = new mongoose.Schema({
    name:{
       type:String,
       required:[true,'Farm must have a name!'] 
    },
    city:{
        type:String
    },
    email:{
        type:String,
        required:[true,'Email required']
    },
    products:[
        {
            type:mongoose.Schema.Types.ObjectId, ref:'Product'
        }
    ]
})
                                 


Shop = mongoose.model('Shop',shopSchema)

module.exports = Shop
