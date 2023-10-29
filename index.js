const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const app = express();
const port = 8000;

// Connect to the MongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/contactdance', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });


// Define the contact schema
const contactSchema = new mongoose.Schema({
    name: {
        type:'string'
    },
    phone: {
        type:'number'
    },
    address: String,
    email: String,
    message: String
});

// creating collection with Contact Name
const Contact = mongoose.model('Contact', contactSchema);

app.use(bodyParser.urlencoded({ extended: true })); // Add this middleware for parsing form data

app.post('/contact', (req, res) => {
    const { name, phone, address, email, message } = req.body; // Destructure the request body
    const myData = new Contact({ name, phone, address, email, message });

    myData.save()
        .then(() => {
           res.status(200).send("data was saved to the database")
        })
        .catch((err) => {
            res.status(400).send("data was not saved to the database");
        });
});

// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});
