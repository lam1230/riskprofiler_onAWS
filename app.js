var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
// var mongoose = require('mongoose');

var surveyRouter = require('./app/routes/survey.server.routes');

var app = express();
app.locals.regions = ['NSW', 'VIC', 'Queensland', 'ACT','Tasmania', 'South Australia', 'Western Australia', 'North Territory'];
app.locals.surveyresults = {
    fp: [0, 0, 0, 0], mp: [0, 0, 0, 0]
};

app.locals.age = ['0-10', '11-20', '21-30','31-40', '41-50', '51-60','61-70','71-80', '81-90', '91-100', 'Above 100'];
app.locals.gender = ['Male', 'Female'];
app.locals.latitude = ['North', 'South', 'Central'];
app.locals.hairColour = ['Black', 'Dark', 'Brown','Light Brown', 'Blond', 'Red'];
app.locals.skinType = ['Skin Type I', 'Skin Type II', 'Skin Type III','Skin Type IV', 'Skin Type V', 'Skin Type VI'];
app.locals.skinCancer = ['Yes', 'No'];
app.locals.familyHistory = ['Yes', 'No'];
app.locals.personalHistory = ['Yes', 'No'];
app.locals.sunburns = ['None','1-2burns', '3-5burns','6-9burns', '10+burns'];
app.locals.eyeColour = ['Dark', 'Medium', 'Light'];
app.locals.moles = ['None', 'Few','Some', 'Many'];
app.locals.freckles = ['None', 'Few','Moderate', 'Many'];


app.set('views', path.join(__dirname, 'app/views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// the session will expire in 60 seconds (60,000 milliseconds)
// change this into 30 minutes after testing
// ref: https://github.com/expressjs/session
app.use(session({
    secret: 'ssshhhhh',
    cookie: {maxAge: 3000},
    resave: true,
    saveUninitialized: true
}));

app.use('/', surveyRouter);


app.listen(process.env.PORT || 3000, function() {
    console.log('survey app is listening on port 3000!');
});

module.exports = app


