const express = require('express')
const app = express()
const methodoverride = require('method-override')
const AppError = require('./apperror')
const Product = require('./models/product')
const mongoose = require('mongoose')
const DB = "mongodb+srv://chiragbangera:chiragadarsh@cluster1.c3lu4j0.mongodb.net/stockStatus?retryWrites=true&w=majority"
mongoose.connect(DB,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((e) => {
        console.log('MongoDB Not Connected')
        console.log(e)
    })

const cat = ['shirt', 't-shirt', 'jeans', 'underwear']



app.set('view engine', 'ejs')
app.use(methodoverride('_method'))
app.use(express.urlencoded({ extended: true }))

// main
app.get('/products', wrapAsync(async (req, res, next) => {

    const { category } = req.query
    if (category) {
        const products = await Product.find({ category })
        res.render('products/index', { products })
    } else {
        const products = await Product.find({})
        res.render('products/index', { products, category: 'All' })
    }
}
))

//  form
app.get('/products/new', (req, res) => {
    res.render('products/new', { cat })
})

app.get('/products/:id/edit', wrapAsync(async (req, res, next) => {

    const { id } = req.params
    const product = await Product.findById(id)
    res.render('products/edit', { product, cat })
}
))


// Products Page Route
app.post('/products', wrapAsync(async (req, res, next) => {

    const newProduct = new Product(req.body)
    await newProduct.save()
    res.redirect(`/products/${newProduct._id}`)
}))



// product Show Page
app.get('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params
    const product = await Product.findById(id)
    if (!product) {
        throw new AppError("Product Not Found", 500)
    }
    res.render('products/show', { product })
}
))

//  Products show page edit route
app.put('/products/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const updateProduct = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })
        await updateProduct.save()
        res.redirect(`/products/${updateProduct._id}`)
    } catch (err) {
        next(err)
    }
})

// delete
app.delete('/products/:id', async (req, res) => {
    const { id } = req.params
    const product = await Product.findByIdAndDelete(id)
    res.redirect('/products')
})



function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(e => next(e))
    }
}






app.use((err, req, res, next) => {
    const { status = 500, message = "Something went wrong" } = err
    res.status(status).send(message)
})




const port = 3000
app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})