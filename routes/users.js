var express = require('express');
var users = express.Router();
var User = require('../models/user');


/* GET home page. */
users.get('/', function(req, res, next) {
  console.log('hello');
  User.find({}, function(err, results){
    if (err) throw err;
    console.log(results);
    // res.json(results);

  });
res.render('index.ejs', {
    title: 'LifeUp'
  });
});

users.get('/new', function(req, res, next) {
  console.log('you are on users/new');
res.render('index.ejs', {
    title: 'LifeUp'
  });
});


module.exports = users;
