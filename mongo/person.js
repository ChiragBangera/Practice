const mongoose = require('mongoose')
const DB = "mongodb+srv://chiragbangera:chiragadarsh@cluster1.c3lu4j0.mongodb.net/moviesdata?retryWrites=true&w=majority"
mongoose.connect(DB,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log('ConnectionOpen')
    })
    .catch((e)=>{
        console.log('Oh No Error')
        console.log(e)
    })

const personSchema = new mongoose.Schema({
    first:String,
    last:String
})

personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`
})

personSchema.pre('save', async function (){
    console.log('About to save')
})

personSchema.post('save', async function (){
    console.log('Saved')
})


const Person = mongoose.model('Person',personSchema);
