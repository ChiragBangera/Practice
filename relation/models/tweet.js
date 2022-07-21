const mongoose = require('mongoose')

const DB = "mongodb+srv://chiragbangera:chiragadarsh@cluster1.c3lu4j0.mongodb.net/relation?retryWrites=true&w=majority"
mongoose.connect(DB,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log('Connected to MongoDB')
    })
    .catch((e)=>{
        console.log('MongoDB Not Connected')
        console.log(e)
    })


const userSchema = new mongoose.Schema({
    username:String,
    age:Number
})


const tweetSchema = new mongoose.Schema({
    text:String,
    likes:Number,
    user: {
        type:mongoose.Schema.Types.ObjectId, ref:'User'
    }
})

const User = mongoose.model('User',userSchema)
const Tweet = mongoose.model('Tweet',tweetSchema)


const makeTweets = async ()=>{
    const user = await User.findOne({username:'Sam'})
    const tweet = new Tweet({text:'I am Hulk',likes:0,user:user})
    await user.save()
    await tweet.save()
    mongoose.connection.close()
}

const findTweets = async()=>{
    const tweet = await Tweet.findOne({}).populate('user')
    console.log(tweet)
}

findTweets()