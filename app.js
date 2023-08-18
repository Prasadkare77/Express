const express = require('express')
const path = require('path')

const app = express()
const PORT = 3000

app.get('/',(req,res)=>{
    res.send("Welcome to root url of server - get method")
})

app.post('/',(req,res)=>{
    res.send("Welcome to root url of server - post method")
})

app.get('/hello',(req,res)=>{
    res.set('Content-Type','text/html')
    res.status(200)
    res.send("<h1>Hellow World<h1/>")
})

app.use(express.json())
app.post('/validateUser',(req,res)=>{
    console.log(req.body);
    const  {userName, password} = req.body
    // Database connection and fetch use and pass
    if(userName==='Prasad' && password=== "Prasad123"){
        res.send("Login Successfull...")
    }else{
        res.send("Invalid Username and Password")
    }
})

// Sending Image Or FIles to Server
app.get('/getImage',(req,res)=>{
    res.send("",path.join(__dirname,""))
})

app.listen(PORT,(error)=>{
    if(!error){
        console.log("Server Successfully Listening on Port 3000");
    }else{
        console.log("Error Occured, Server Can't Start");
    }
})