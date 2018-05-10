var router = require('express').Router();
var mongoose = require('mongoose');
var Blog = mongoose.model('Blog');

// return a list of tags
router.get('/', function(req, res, next) {
  Blog.find().distinct('tagList').then(function(tags){
    return res.json({tags: tags});
  }).catch(next);
});

module.exports = router;
