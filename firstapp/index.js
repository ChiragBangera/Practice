const express = require('express');
const app = express()
const playerdata = require('./data.json')

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('home.ejs')
})

app.get('/rand',(req,res)=>{
    const num = Math.floor(Math.random()*10)+1
    res.render('random.ejs',{num})
})

app.get('/r/:sub',(req,res)=>{
    const {sub} = req.params
    const data  = playerdata
    console.log(data)
    res.render('sub',{...data})
})

app.get('/cats',(req,res)=>{
    const cats = ['masco','peeku','jackie','sheeku']
    res.render('cats',{cats})
})




app.listen(3000, ()=>{
    console.log('Listening in port 3000')
})

