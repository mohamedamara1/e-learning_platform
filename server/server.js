const queries = require("./Queries.js");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
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

app.get('/student', async (req, res)=>{
    const Student = await queries.getStudent({id : 1});
    console.log(Student);
    res.json(Student)
})
