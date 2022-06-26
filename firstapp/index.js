const express = require('express');
const app = express()

app.use(()=>{
    console.log('Got a new request')
})

app.listen(3000, ()=>{
    console.log('Listening in port 3000')
})