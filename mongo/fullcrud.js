const express = require('express')
const app = express()
app.set('view engine','ejs')
const methodoverride = require('method-override')
app.use(methodoverride('_method'))
app.use(express.urlencoded({extended:true}))
const flash =  require('connect-flash')
const session = require('express-session')
app.use(session({secret:'this is not a good secret', resave:false, saveUninitialized:false }))
app.use(flash())
const Product = require('./models/product')
const Shop = require('./models/farm')
const mongoose = require('mongoose')
const { createIndexes } = require('./models/product')
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

const cat = ['shirt','t-shirt','jeans','underwear']


// Farm Routes
app.get('/farms',async(req,res)=>{
    const farms = await Shop.find({})
    res.render('farms/index',{farms,messages:req.flash('success')})
})

app.get('/farms/new',(req,res)=>{
    res.render('farms/new')
})

app.get('/farms/:id',async (req,res)=>{
    const {id} = req.params
    const shop = await Shop.findById(id).populate('products')
    res.render('farms/details',{shop})
})


app.post('/farms',async(req,res,next)=>{
    const data = new Shop(req.body)
    await data.save()
    req.flash('success','Made a new farm')
    res.redirect('/farms')
})



app.get('/farms/:id/products/new',(req,res)=>{
    const {id} = req.params
    res.render('products/new',{cat,id})
})


app.post('/farms/:id/products',async(req,res)=>{
    const {id} = req.params
    const farm = await Shop.findById(id)
    const {name,price,category} = req.body
    const product = new Product({name,price,category})
    farm.products.push(product)
    product.farm = farm
    await farm.save()
    await product.save()
    res.redirect(`/farms/${id}`)
})

app.delete('/farms/:id',async (req,res)=>{
    const {id} = req.params
    const farm  = await Shop.findByIdAndDelete(id)
    if(farm.products.length){
        const res = await Product.deleteMany({_id:{$in:farm.products}})
        console.log(res)
     }
    res.redirect('/farms')
})



// main
app.get('/products',async (req,res)=>{
    const {category} = req.query
    if(category){
        const products = await Product.find({category})
        res.render('products/index', {products, category})
    }else{
        const products = await Product.find({})
    res.render('products/index', {products,category:'All'})
    }
    
})

//  form
app.get('/products/new',(req,res)=>{
    res.render('products/new',{cat})
})

app.get('/products/:id/edit',async (req,res)=>{
    const {id} = req.params
    const product  = await Product.findById(id)
    res.render('products/edit',{product,cat})
})



app.post('/products',async (req,res)=>{
    const newProduct = new Product(req.body)
    await newProduct.save()
    res.redirect(`/products/${newProduct._id}`)
})

// product 
app.get('/products/:id',async (req,res)=>{
    const {id} = req.params
    const product  = await Product.findById(id).populate('farm')
    res.render('products/show',{product})
 })


app.put('/products/:id',async (req,res)=>{
    const {id} = req.params
    const updateProduct = await Product.findByIdAndUpdate(id,req.body,{runValidators:true, new:true})
    await updateProduct.save()
    res.redirect(`/products/${updateProduct._id}`)
})

// delete
app.delete('/products/:id',async (req,res)=>{
    const {id} = req.params
    const product  = await Product.findByIdAndDelete(id)
    res.redirect('/products')
})



















const port = 3000
app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})