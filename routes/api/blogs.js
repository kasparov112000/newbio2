var router = require('express').Router();
var mongoose = require('mongoose');
var Blog = mongoose.model('Blog');
var Comment = mongoose.model('Comment');
var User = mongoose.model('User');
var auth = require('../auth');

// Preload blog objects on routes with ':blog'
router.param('blog', function(req, res, next, slug) {
  Blog.findOne({ slug: slug})
    .populate('author')
    .then(function (blog) {
      if (!blog) { return res.sendStatus(404); }

      req.blog = blog;

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
      Blog.find(query)
        .limit(Number(limit))
        .skip(Number(offset))
        .sort({createdAt: 'desc'})
        .populate('author')
        .exec(),
      Blog.count(query).exec(),
      req.payload ? User.findById(req.payload.id) : null,
    ]).then(function(results){
      var blogs = results[0];
      var blogsCount = results[1];
      var user = results[2];

      return res.json({
        blogs: blogs.map(function(blog){
          return blog.toJSONFor(user);
        }),
        blogsCount: blogsCount
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
      Blog.find({ author: {$in: user.following}})
        .limit(Number(limit))
        .skip(Number(offset))
        .populate('author')
        .exec(),
      Blog.count({ author: {$in: user.following}})
    ]).then(function(results){
      var blogs = results[0];
      var blogsCount = results[1];

      return res.json({
        blogs: blogs.map(function(blog){
          return blog.toJSONFor(user);
        }),
        blogsCount: blogsCount
      });
    }).catch(next);
  });
});

router.post('/', auth.required, function(req, res, next) {
  User.findById(req.payload.id).then(function(user){
    if (!user) { return res.sendStatus(401); }

    var blog = new Blog(req.body.blog);

    blog.author = user;

    return blog.save().then(function(){
      console.log(blog.toString);
      return res.json({blog: blog.toJSONFor(user)});
    });
  }).catch(next);
});

// return a blog
router.get('/:blog', auth.optional, function(req, res, next) {
  Promise.all([
    req.payload ? User.findById(req.payload.id) : null,
    req.blog.populate('author').execPopulate()
  ]).then(function(results){
    var user = results[0];

    return res.json({blog: req.blog.toJSONFor(user)});
  }).catch(next);
});

// update blog
router.put('/:blog', auth.required, function(req, res, next) {
  User.findById(req.payload.id).then(function(user){
    if(req.blog.author._id.toString() === req.payload.id.toString() || req.payload.isadmin ){
      if(typeof req.body.blog.title !== 'undefined'){
        req.blog.title = req.body.blog.title;
      }

      if(typeof req.body.blog.description !== 'undefined'){
        req.blog.description = req.body.blog.description;
      }

      if(typeof req.body.blog.toFrontPage !== 'undefined'){
        req.blog.toFrontPage = req.body.blog.toFrontPage;
      }

      if(typeof req.body.blog.approved !== 'undefined'){
        req.blog.approved = req.body.blog.approved;
      }

      if(typeof req.body.blog.showOnlyPreview !== 'undefined'){
        req.blog.showOnlyPreview = req.body.blog.showOnlyPreview;
      }

      if(typeof req.body.blog.body !== 'undefined'){
        req.blog.body = req.body.blog.body;
      }

      if(typeof req.body.blog.tagList !== 'undefined'){
        req.blog.tagList = req.body.blog.tagList
      }

      req.blog.save().then(function(blog){
        return res.json({blog: blog.toJSONFor(user)});
      }).catch(next);
    } else {
      return res.sendStatus(403);
    }
  });
});

// delete blog
router.delete('/:blog', auth.required, function(req, res, next) {
  User.findById(req.payload.id).then(function(user){
    if (!user) { return res.sendStatus(401); }

    if(req.blog.author._id.toString() === req.payload.id.toString() || req.payload.isadmin){
      return req.blog.remove().then(function(){
        return res.sendStatus(204);
      });
    } else {
      return res.sendStatus(403);
    }
  }).catch(next);
});

// Favorite an blog
router.post('/:blog/favorite', auth.required, function(req, res, next) {
  console.log(res.toString);
  var blogId = req.blog._id;

  User.findById(req.payload.id).then(function(user){
    if (!user) { return res.sendStatus(401); }

    return user.favorite(blogId).then(function(){
      return req.blog.updateFavoriteCount().then(function(blog){
        return res.json({blog: blog.toJSONFor(user)});
      });
    });
  }).catch(next);
});

// Unfavorite an blog
router.delete('/:blog/favorite', auth.required, function(req, res, next) {
  var blogId = req.blog._id;

  User.findById(req.payload.id).then(function (user){
    if (!user) { return res.sendStatus(401); }

    return user.unfavorite(blogId).then(function(){
      return req.blog.updateFavoriteCount().then(function(blog){
        return res.json({blog: blog.toJSONFor(user)});
      });
    });
  }).catch(next);
});

// return an blog's comments
router.get('/:blog/comments', auth.optional, function(req, res, next){
  Promise.resolve(req.payload ? User.findById(req.payload.id) : null).then(function(user){
    return req.blog.populate({
      path: 'comments',
      populate: {
        path: 'author'
      },
      options: {
        sort: {
          createdAt: 'desc'
        }
      }
    }).execPopulate().then(function(blog) {
      return res.json({comments: req.blog.comments.map(function(comment){
        return comment.toJSONFor(user);
      })});
    });
  }).catch(next);
});

// create a new comment
router.post('/:blog/comments', auth.required, function(req, res, next) {
  User.findById(req.payload.id).then(function(user){
    if(!user){ return res.sendStatus(401); }

    var comment = new Comment(req.body.comment);
    comment.blog = req.blog;
    comment.author = user;

    return comment.save().then(function(){
      req.blog.comments.push(comment);

      return req.blog.save().then(function(blog) {
        res.json({comment: comment.toJSONFor(user)});
      });
    });
  }).catch(next);
});

router.delete('/:blog/comments/:comment', auth.required, function(req, res, next) {
  if(req.comment.author.toString() === req.payload.id.toString()){
    req.blog.comments.remove(req.comment._id);
    req.blog.save()
      .then(Comment.find({_id: req.comment._id}).remove().exec())
      .then(function(){
        res.sendStatus(204);
      });
  } else {
    res.sendStatus(403);
  }
});

module.exports = router;
