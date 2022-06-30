const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json({extended:true}))

app.get('/tacos',(req,res)=>{
    res.send('GET/ tacos')
})

app.post('/tacos',(req,res)=>{
    console.log(req.body)
    res.send('post/ tacos')
})


const port = 3000
app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})