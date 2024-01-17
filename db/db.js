const mongoose = require('mongoose');

const dbConnect = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL,{
            useNewUrlParser: true
        })
        console.log('database connected succesfully')
    }
    catch(error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = dbConnect;