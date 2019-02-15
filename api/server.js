const express = require('express');
const utils = require('./config/utils');
const app = express();
const port = utils.port;
const router = require("./router/router");
const cors = require('cors');
const fileUpload = require('express-fileupload');

app.use(cors());
app.use(fileUpload());
app.use("/file", router);

app.listen(port);
console.log("Listen on Port "+port)