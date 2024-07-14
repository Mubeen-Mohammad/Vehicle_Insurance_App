const express = require('express') // Importing the express module
const app = express() // const... creating the app
//const Todo = require('./todo')
const port = process.env.PORT || 3000;
const bodyparser = require('body-parser');
const db = require('./db/db');
const claim=require('./db/apps');
const { Query } = require('mongoose');
app.use(bodyparser.json());

app.get('/', (req, res) => res.send('Hello World!'))

// Login
app.post("/login", async (req, res) => {
    const body = req.body;
    const email = body.email;
    const pass = body.pass;

    const result = await db.find({"email": email, "pass": pass});
    if(result.length == 1) {
        res.json({msg: "Login successfull", status: 200})
    } else {
        res.json({msg: "Login Failed", status: 400})
    }
})

// register
app.post("/register", async (req, res) => {
    const body = req.body;

    const result = await db.create(body);
    res.status(201).json({msg: "user registered successfully"})
})


// claim
app.post("/Claim", async (req, res) => {

    const body = req.body;
    // const email = body.email;
    // const insuranceType = body.insuranceType;

    const result = await claim.create( body);
    res.status(201).json({msg: "Claim submitted successfully"})

});

app.get("/allClaims", async (req, res) => {
    const email = req.query.email;

    if (!email) {
        return res.status(400).send('Email query parameter is required');
    }
    const result = await claim.find({ email: email });
    if (result.length === 0) {
        res.status(404).send('No claims found for this email');
    } else{
       res.status(200).json(result);
    }   
   
});


app.listen(port, () => console.log(`App listening on port ${port}!`))

