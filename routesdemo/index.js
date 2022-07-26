const express = require('express')
const app = express()
const shelterRoutes = require('./routes/shelters')

app.use('/shelters',shelterRoutes)






const port = 5000
app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})