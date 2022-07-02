const express = require('express')
const app = express()
const override = require('method-override')
const {v4:uuid} = require('uuid')
uuid()
app.use(express.urlencoded({extended:true}))
app.use(express.json({extended:true}))
app.set('view engine', 'ejs')
app.use(override('_method'))


let comments = [
    {
        id:uuid(),  
        username:"Chirag",
        comment:"I will be The best"
    },
    {
        id:uuid(),
        username:"Janmitha",
        comment:"I am The best after Chirag"
    },
    {
        id:uuid(),
        username:"Rajeshwari",
        comment:"I am the best"
    },
    {
        id:uuid(),
        username:"Chandrahas",
        comment:"I am the best after Rajeshwari"
    },

]

app.get('/tacos',(req,res)=>{
    res.send('GET/ tacos')
})

app.post('/tacos',(req,res)=>{
    console.log(req.body)
    res.send('post/ tacos')
})

app.get('/comments',(req,res)=>{
    res.render("index.ejs",{comments})
})

app.get('/comments/new',(req,res)=>{
    res.render('new.ejs')
})

app.post('/comments',(req,res)=>{
    const {username,comment} = req.body
    comments.push({username,comment,id:uuid()})
    res.redirect('/comments')
})

app.get('/comments/:id',(req,res)=>{
    const {id}=req.params
    const comment = comments.find(c=>c.id===id)
    res.render('show.ejs',{comment})
})

app.patch('/comments/:id',(req,res)=>{
    const {id}=req.params
    const newcomment = req.body.comment
    const foundcomment = comments.find(c=>c.id===id)
    foundcomment.comment = newcomment
    res.redirect('/comments')
})



app.get('/comments/:id/edit',(req,res)=>{
    const {id}=req.params
    const comment = comments.find(c=>c.id===id)
    res.render('edit.ejs',{comment})
})

app.delete('/comments/:id',(req,res)=>{
    const {id}=req.params
    comments = comments.filter(c=>c.id !==id)
    res.redirect('/comments')
})

const port = 3000
app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})