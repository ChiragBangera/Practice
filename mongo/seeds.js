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

// const p = new Product({
//     name:'Oxemberg Opulento',
//     price:899,
//     category:'shirt'
// })
// p.save()
//     .then(p=>{
//         console.log(p)
//     })
//     .catch(e=>{
//         console.log(e)
//     })


const seedProduct = [
    {
        name:'Oxemberg Slim',
        price:999,
        category:'shirt'
    },
    {
        name:'Jockey US 20',
        price:799,
        category:'underwear'
    },
    {
        name:'Cotton Dats Trim Fit',
        price:699,
        category:'jeans'
    },
    {
        name:'Classic Polo',
        price:1099,
        category:'t-shirt'
    }



]


Product.insertMany(seedProduct)
    .then(res=>{
        console.log(res)
    })
    .catch(e=>{
        console.log(e)
    })