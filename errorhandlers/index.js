const express = require('express')
const app = express()
const morgan = require('morgan')
const AppError = require('./apperror')

app.use(morgan('tiny'))



const verifyPassword=((req, res, next) => {
    const { password } = req.query
    if (password === 'chickennugget'){
        next()
    }
    throw new AppError('Password Required', 401)
})


app.get('/secret',verifyPassword,(req,res)=>{
    res.send('My Secret is I want to be the best')
})


app.get('/',(req,res)=>{
    res.send('My Secret is I want to be the best')
})

app.get('/admin',(req,res)=>{
    throw new AppError('Not Authorised',403)
})

app.use((req, res) => {
    res.status(404).send('Page Not Found')
})

app.use((err,req,res,next)=>{
    const {status = 500, message = 'Something Went Wrong'} = err
    res.status(status).send(message)
})

const port = 3000
app.listen(port, () => {
    console.log(`Connected to port ${port}`)
})