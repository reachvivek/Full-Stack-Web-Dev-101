const express = require('express') 
const bodyParser = require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res)=> res.sendFile(__dirname+"/bmiCalculator.html"));
app.post('/', (req, res)=> res.send('Your BMI is: '+(Number(req.body.weight)/Number(req.body.height**2))))

app.listen(3000, ()=>console.log("Server started on port 3000"));