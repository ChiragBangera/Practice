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
        first:String,
        last:String,
        addresses:[
            {
                city:String,
                state:String,
                country:String,
                zipcode:{
                    type:Number,
                    min:6
                }
            }
        ]
    })


const User = mongoose.model('User',userSchema)


const makeUser = async ()=>{
    const user = new User({
        first:'Chirag',
        last:'Bangera'
    })

    user.addresses.push({
        city:'Mangalore',
        state:'Karnataka',
        country:'India',
        zipcode:574142
    })
    const res = await user.save()
    console.log(res)
}


const addAddress = async(id)=>{
    const user = await User.findById(id)
    user.addresses.push({
        city:'Madrid',
        state:'Spain',
        country:'India',
        zipcode:574142
    })
    const res  = await user.save()
    console.log(res)
}



addAddress('62d82bf8a61611bbdeea4620')