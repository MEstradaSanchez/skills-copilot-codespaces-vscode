// Create web server
var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var comments = require('./comments.json');
var _ = require('lodash');

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// Get comments
app.get('/api/comments', function(req, res) {
  res.json(comments);
});

// Add comments
app.post('/api/comments', function(req, res) {
  var comment = {
    id: Date.now(),