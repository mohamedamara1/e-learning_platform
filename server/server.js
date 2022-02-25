const express = require("express");
const app = express();
const cors = require("cors");
const client = require("./db/db")
require('dotenv').config();


app.use(cors());
app.use(express.json());

app.listen(process.env.PORT || 5000 , () => {
    console.log("server has started on port 5000");

})
