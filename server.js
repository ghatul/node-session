const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const helmet = require('helmet');
const compression = require('compression');
const indexRouter = require('./routes');
const mongoService = require('./dataaccess/mongo.service');
/* Helmet can help protect app from some well-known web
vulnerabilities by setting HTTP headers appropriately.*/
app.use(helmet());
app.use(cors())
// Enabling Gzip compression
app.use(compression());

// view engine setup
app.set('views', path.join(__dirname, '/public/views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);

// Error handler
mongoService.connect().then(result => {
  app.listen(4005, () => console.log('Application running on port:4001'));
}).catch(err => {
  console.log('connection errrrr');
});
