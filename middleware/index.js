const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('common'))
app.use((req,res,next)=>{
    console.log('This is a Middleware')
    next()
})


app.get('/',(req,res)=>{
   res.send('Home Page')
})


app.get('/dogs',(req,res)=>{
    res.send('Wooof')
})


const port = 3000
app.listen(port,()=>{
    console.log(`Connected to port ${port}`)
})