
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');
require("dotenv").config();
const router = require("./src/Router")
require("./src/config.mongodb");


app.use(cors());
app.use(express.json());
app.use(router);



app.listen(port,() => console.log(`Listening on port ${port}`));