var router = require('express').Router();
var mongoose = require('mongoose');
var Donation = mongoose.model('Donation');
var Comment = mongoose.model('Comment');
var User = mongoose.model('User');
var auth = require('../auth');

// Preload donation objects on routes with ':donation'
router.param('donation', function(req, res, next, slug) {
  Donation.findOne({ slug: slug})
    .populate('author')
    .then(function (donation) {
      if (!donation) { return res.sendStatus(404); }

      req.donation = donation;

      return next();
    }).catch(next);
});

router.param('comment', function(req, res, next, id) {
  Comment.findById(id).then(function(comment){
    if(!comment) { return res.sendStatus(404); }

    req.comment = comment;

    return next();
  }).catch(next);
});

router.get('/', auth.optional, function(req, res, next) {
  var query = {};
  var limit = 20;
  var offset = 0;

  if(typeof req.query.limit !== 'undefined'){
    limit = req.query.limit;
  }

  if(typeof req.query.offset !== 'undefined'){
    offset = req.query.offset;
  }

  if( typeof req.query.tag !== 'undefined' ){
    query.tagList = {"$in" : [req.query.tag]};
  }

  Promise.all([
    req.query.author ? User.findOne({username: req.query.author}) : null,
    req.query.favorited ? User.findOne({username: req.query.favorited}) : null
  ]).then(function(results){
    var author = results[0];
    var favoriter = results[1];

    if(author){
      query.author = author._id;
    }

    if(favoriter){
      query._id = {$in: favoriter.favorites};
    } else if(req.query.favorited){
      query._id = {$in: []};
    }

    return Promise.all([
      Donation.find(query)
        .limit(Number(limit))
        .skip(Number(offset))
        .sort({createdAt: 'desc'})
        .populate('author')
        .exec(),
      Donation.count(query).exec(),
      req.payload ? User.findById(req.payload.id) : null,
    ]).then(function(results){
      var donations = results[0];
      var donationsCount = results[1];
      var user = results[2];

      return res.json({
        donations: donations.map(function(donation){
          return donation.toJSONFor(user);
        }),
        donationsCount: donationsCount
      });
    });
  }).catch(next);
});

router.get('/feed', auth.required, function(req, res, next) {
  var limit = 20;
  var offset = 0;

  if(typeof req.query.limit !== 'undefined'){
    limit = req.query.limit;
  }

  if(typeof req.query.offset !== 'undefined'){
    offset = req.query.offset;
  }

  User.findById(req.payload.id).then(function(user){
    if (!user) { return res.sendStatus(401); }

    Promise.all([
      Donation.find({ author: {$in: user.following}})
        .limit(Number(limit))
        .skip(Number(offset))
        .populate('author')
        .exec(),
      Donation.count({ author: {$in: user.following}})
    ]).then(function(results){
      var donations = results[0];
      var donationsCount = results[1];

      return res.json({
        donations: donations.map(function(donation){
          return donation.toJSONFor(user);
        }),
        donationsCount: donationsCount
      });
    }).catch(next);
  });
});

router.post('/', auth.required, function(req, res, next) {
  User.findById(req.payload.id).then(function(user){
    if (!user) { return res.sendStatus(401); }

    var donation = new Donation(req.body.donation);

    donation.author = user;

    return donation.save().then(function(){
      console.log(donation.author);
      return res.json({donation: donation.toJSONFor(user)});
    });
  }).catch(next);
});

// return a donation
router.get('/:donation', auth.optional, function(req, res, next) {
  Promise.all([
    req.payload ? User.findById(req.payload.id) : null,
    req.donation.populate('author').execPopulate()
  ]).then(function(results){
    var user = results[0];

    return res.json({donation: req.donation.toJSONFor(user)});
  }).catch(next);
});

// update donation
router.put('/:donation', auth.required, function(req, res, next) {
  User.findById(req.payload.id).then(function(user){
    if(req.donation.author._id.toString() === req.payload.id.toString()){
      if(typeof req.body.donation.title !== 'undefined'){
        req.donation.title = req.body.donation.title;
      }

      if(typeof req.body.donation.description !== 'undefined'){
        req.donation.description = req.body.donation.description;
      }

      if(typeof req.body.donation.body !== 'undefined'){
        req.donation.body = req.body.donation.body;
      }

      if(typeof req.body.donation.tagList !== 'undefined'){
        req.donation.tagList = req.body.donation.tagList
      }

      req.donation.save().then(function(donation){
        return res.json({donation: donation.toJSONFor(user)});
      }).catch(next);
    } else {
      return res.sendStatus(403);
    }
  });
});

// delete donation
router.delete('/:donation', auth.required, function(req, res, next) {
  User.findById(req.payload.id).then(function(user){
    if (!user) { return res.sendStatus(401); }

    if(req.donation.author._id.toString() === req.payload.id.toString()){
      return req.donation.remove().then(function(){
        return res.sendStatus(204);
      });
    } else {
      return res.sendStatus(403);
    }
  }).catch(next);
});

// Favorite an donation
router.post('/:donation/favorite', auth.required, function(req, res, next) {
  var donationId = req.donation._id;

  User.findById(req.payload.id).then(function(user){
    if (!user) { return res.sendStatus(401); }

    return user.favorite(donationId).then(function(){
      return req.donation.updateFavoriteCount().then(function(donation){
        return res.json({donation: donation.toJSONFor(user)});
      });
    });
  }).catch(next);
});

// Unfavorite an donation
router.delete('/:donation/favorite', auth.required, function(req, res, next) {
  var donationId = req.donation._id;

  User.findById(req.payload.id).then(function (user){
    if (!user) { return res.sendStatus(401); }

    return user.unfavorite(donationId).then(function(){
      return req.donation.updateFavoriteCount().then(function(donation){
        return res.json({donation: donation.toJSONFor(user)});
      });
    });
  }).catch(next);
});

// return an donation's comments
router.get('/:donation/comments', auth.optional, function(req, res, next){
  Promise.resolve(req.payload ? User.findById(req.payload.id) : null).then(function(user){
    return req.donation.populate({
      path: 'comments',
      populate: {
        path: 'author'
      },
      options: {
        sort: {
          createdAt: 'desc'
        }
      }
    }).execPopulate().then(function(donation) {
      return res.json({comments: req.donation.comments.map(function(comment){
        return comment.toJSONFor(user);
      })});
    });
  }).catch(next);
});

// create a new comment
router.post('/:donation/comments', auth.required, function(req, res, next) {
  User.findById(req.payload.id).then(function(user){
    if(!user){ return res.sendStatus(401); }

    var comment = new Comment(req.body.comment);
    comment.donation = req.donation;
    comment.author = user;

    return comment.save().then(function(){
      req.donation.comments.push(comment);

      return req.donation.save().then(function(donation) {
        res.json({comment: comment.toJSONFor(user)});
      });
    });
  }).catch(next);
});

router.delete('/:donation/comments/:comment', auth.required, function(req, res, next) {
  if(req.comment.author.toString() === req.payload.id.toString()){
    req.donation.comments.remove(req.comment._id);
    req.donation.save()
      .then(Comment.find({_id: req.comment._id}).remove().exec())
      .then(function(){
        res.sendStatus(204);
      });
  } else {
    res.sendStatus(403);
  }
});

module.exports = router;
