const express = require('express')
const app = express()
require('dotenv').config({path:'./config.env'})
port = process.env.PORT || 8080;
const dbConnect = require('./db/db')
const userRoutes = require('./routes/userRoutes')
const cors = require('cors')
const fetchPostData = require('./controller/dataController')


// datafetch
fetchPostData()



// database connection call
dbConnect();
// middleware
app.use(cors())
app.use(express.json())
app.use('/api/user',userRoutes)


app.listen(port, ()=>{
    console.log(`server is runing on  ${port}`)
})