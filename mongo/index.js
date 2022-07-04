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

const movieSchema = new mongoose.Schema({
    title:String,
    year:Number,
    score:Number,
    rating:String
})


movieSchema.methods.greet = function () {
    console.log('Great Movie')
}


// Creating Model name should hav upper case
const Movie = mongoose.model('Movie',movieSchema)
// const mav = new Movie({title:'Maverick',year:2022,score:9,rating:10})


Movie.insertMany([
    {title:'Maverick',year:2022,score:9,rating:"R"},
    {title:'Top Gun',year:1986,score:7,rating:"R"},
    {title:'Fast 5',year:2014,score:6,rating:"PG"},
    {title:'Tokyo Drift',year:2013,score:8,rating:"R"},
    {title:'Man Of Steel',year:2012,score:7.7,rating:"PG-13"}
])
.then((data)=>{
    console.log('Inserted Successfuly')
    console.log(data)
})


const findMovie = async () =>{
    const foundMovie = await Movie.findOne({rating:'R'})
    foundMovie.greet()
}

findMovie()