const express = require('express');
const router = express.Router();







router.post('/',(req,res)=>{
    res.send('Hello Shelter')
})

router.get('/',(req,res)=>{
    res.send('Hello Shelter')
})


router.get('/:id',(req,res)=>{
    res.send('Hello Shelter id')
})

module.exports = router;