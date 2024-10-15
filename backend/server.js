require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workOutRoutes = require('./routes/workouts')

const app = express()

//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.use('/api/workouts',workOutRoutes)

//connect to database

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        
        app.listen(process.env.PORT,()=>{             //listen for request                       
            console.log("Connceted to db & Server started on port 4000!!")
        })  

    })
    .catch((error)=>{
        console.log(error)
    })
