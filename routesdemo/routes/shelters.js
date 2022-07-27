const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser')
const session = require('express-session')


router.use(cookieParser())
router.use(session({secret:'this is not a good secret', resave:false, saveUninitialized:false }))






router.get('/',(req,res)=>{
    const {username='Anonymous'} = req.query
    req.session.username = username
})


router.get('/mew',(req,res)=>{
    res.cookie('name', 'Chirag')
    res.send('Hello Shelter id')
})

module.exports = router;