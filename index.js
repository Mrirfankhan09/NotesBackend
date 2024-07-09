require('dotenv').config()
const express = require('express');
const cors = require('cors');
const notesRouter = require('./routes/notes');


const server = express();

server.use(express.json());
server.use(cors());

server.use('/notes', notesRouter);
const mongoose = require('mongoose');
const PORT =process.env.PORT|| 3000;

// console.log(process.env.MONGO_URL,process.env.PUBLIC_DIR,process.env.PORT)

mongoose.connect(process.env.MONGO_URL, {
  dbName: "notesmern"
}).then(() => console.log("mongodb connected successfully")).catch((err) => {
  console.log(err);
})



server.listen(PORT, () => {
  console.log('server started')
})