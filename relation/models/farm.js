const mongoose = require('mongoose')

const DB = "mongodb+srv://chiragbangera:chiragadarsh@cluster1.c3lu4j0.mongodb.net/relation?retryWrites=true&w=majority"
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


const productSchema = new mongoose.Schema({
    name : String,
    price:Number,
    season:{
        type:String,
        enum:['Spring','Summer','Fall','Winter']
    }
})

const Product = mongoose.model('Product',productSchema)



const addProduct = async()=>{
    await Product.insertMany([
        {name:'Melon',price:'499',season:'Spring'},
        {name:'Water Melon',price:'399',season:'Summer'},
        {name:'Goddess Melon',price:'699',season:'Winter'}
    ])
    mongoose.connection.close()
}


const farmSchema = new mongoose.Schema({
    name : String,
    city:String,
    products:[
        {
            type:mongoose.Schema.Types.ObjectId, ref:'Product'
        }
    ]
})

const Farm = mongoose.model('Farm',farmSchema)


const addFarm=async()=>{
    const farm = new Farm({name:'Full Belly Farms',city:'Guinda,CA'})
    const melon = await Product.findOne({name:'Goddess Melon'})
    farm.products.push(melon)
    await farm.save()
    console.log(farm)
    mongoose.connection.close()
}



Farm.findOne({name:'Full Belly Farms'}).populate('products')
    .then(farm=>console.log(farm))