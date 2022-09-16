const { request, response } = require("express");
const express=require("express");

const app=express();

app.get('/', (request, response)=>response.send("Hello"));
app.get('/contact', (request, response)=>response.send("Email: rogerthatvivek@gmail.com"));
app.get('/about', (request, response)=>response.send("I am Vivek Kumar Singh. I am looking for a job!"));
app.get('/hobbies', (req, res)=>res.send("<ul><li>Travelling</li><li>Swimming</li><li>Trekking</li></ul>"))

app.listen(3000, ()=>console.log('Server started running on Port 3000'));