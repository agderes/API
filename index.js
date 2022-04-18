const PORT = 8000
//Performing a GET request
const axios = require('axios');
const express = require('express');
const cheerio = require('cheerio')
const app = express()

app.get('/', (req,res)=>{
    res.json("Welcome to the paradise city \n where the grass are green")
})

app.listen(PORT,() => console.log("SERVER ÇALISİYAAH  "))

