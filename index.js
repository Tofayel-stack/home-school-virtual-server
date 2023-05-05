const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')

app.use(cors())


const coursesDetails = require('./Data/courses.json')

app.get('/',(req,res)=>{
    res.send('hy tofayel , Home school server is running , have a good job !')
})

app.get('/courses',(req,res)=>{
    res.send(coursesDetails)
})

app.get('/courses/:id',(req,res)=>{


    const id = req.params.id

    console.log(id);
    const course = coursesDetails.find((sCourse)=> sCourse.id == id)
    res.send(course)
})

app.listen(port,()=>{
    console.log(`running  on the port ${port}`)
})


