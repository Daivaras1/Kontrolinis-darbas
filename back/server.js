const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const EmployeeModel = require('./models/Employee');
const proceduresRoutes = require('../back/routes/proceduresRoutes')
require("dotenv").config();


app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://Daivaras:nesakysiu123@backend.pd8n0gt.mongodb.net/")

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
        .then(employees => res.send(employees))
        .catch(err => res.json(err))
})

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email})
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json(user)
                } else {
                    res.json("incorrect password")
                }
            } else {
                res.json("No record exist")
            }
        })
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
});

const procedureRoutes = require('./routes/proceduresRoutes');

app.use('/api/procedures', procedureRoutes);

