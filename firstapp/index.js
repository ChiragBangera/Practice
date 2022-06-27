const express = require('express');
const app = express()

// app.use((req,res)=>{
//     console.log('Got a new request')
//     res.send('Hello we got your request this a response')
// })
app.get('/',(req,res)=>{
    console.log('This a roots requests')
    res.send('This is the home page!!!')
})

app.get('/r/:sub',(req,res)=>{
    const {sub} = req.params
    const {q} = req.query
    res.send(`<h1>This is sub reddit parameter <b>${sub}</b> and this is your query <b>${q}</b></h1>`)
})



app.get('/cats',(req,res)=>{
    console.log('This a cats requests')
    res.send('Meouwww!!!')
})

app.get('/dogs',(req,res)=>{
    console.log('This a dogs requests')
    res.send('Wooof!!!')
})

// rousts are matched in order'
app.get('*',(req,res)=>{
    res.send("I dotn know where i am:(")
})



app.listen(3000, ()=>{
    console.log('Listening in port 3000')
})

