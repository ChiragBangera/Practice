const express = require('express')
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json({extended:true}))
app.set('view engine', 'ejs')

const comments = [
    {
        id:1,  
        username:"Chirag",
        comment:"I will be The best"
    },
    {
        id:2,
        username:"Janmitha",
        comment:"I am The best after Chirag"
    },
    {
        id:3,
        username:"Rajeshwari",
        comment:"I am the best"
    },
    {
        id:4,
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
    comments.push({username,comment})
    res.redirect('/comments')
})

app.get('/comments/:id',(req,res)=>{
    const {id}=req.params
    const comment = comments.find(c=>c.id===parseInt(id))
    res.render('show.ejs',{comment})
})


const port = 3000
app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})