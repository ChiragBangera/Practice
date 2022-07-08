const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('tiny'))



const verifyPassword=((req, res, next) => {
    const { password } = req.query
    if (password === 'chickennugget'){
        next()
    }
    res.send('Sorry you need a password')
})


app.get('/secret',verifyPassword,(req,res)=>{
    res.send('My Secret is I want to be the best')
})

app.use((req, res) => {
    res.status(404).send('Page Not Found')
})

const port = 3000
app.listen(port, () => {
    console.log(`Connected to port ${port}`)
})