const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors()); //Allow requests from frontend
app.use(express.json()); //Parse JSON bodies

//connect to MongoDB
mongoose.connect(procees.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error(err));

//Basic route for testing
app.get("/", (req, res) => {
    res.send("backend is running....");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));