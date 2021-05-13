const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.json());

//? ตัว middleware
// const errorHandler = require('./app/middleware/error-handler');


global.__basedir = __dirname;

dotenv.config();



// ============================= routes =============================
app.use('/vcontent/api/vcontent-video', require('./app/routes/vcontent-video.routes'));

//!ตัวcontent ยังไม่ได้ใส่อะไรลงไป
// app.use('/vcontent/api/vcontent-content', require('./app/routes/vcontent-content.routes.js'));



// ============================= global error handler =============================
// app.use(errorHandler.get404);

// app.use(errorHandler.get500);


module.exports = app;