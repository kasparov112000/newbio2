var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var slug = require('slug');
var User = mongoose.model('User');

var BlogSchema = new mongoose.Schema({
  slug: {type: String, lowercase: true, unique: true},
  toFrontPage: Boolean, 
  approved: Boolean, 
  showOnlyPreview: Boolean,
  title: String,
  description: String,
  body: String, 
  favoritesCount: {type: Number, default: 0},
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  tagList: [{ type: String }],
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {timestamps: true}); 

BlogSchema.plugin(uniqueValidator, { message: '{VALUE} {TYPE} Error, expected {PATH} to be unique.' });

BlogSchema.pre('validate', function(next){
  if(!this.slug)  {
    this.slugify();
  }

  next();
});

BlogSchema.methods.slugify = function() {
  this.slug = slug(this.title) + '-' + (Math.random() * Math.pow(36, 6) | 0).toString(36);
};

BlogSchema.methods.updateFavoriteCount = function() {
  var blog = this;

  return User.count({favorites: {$in: [blog._id]}}).then(function(count){
    blog.favoritesCount = count;

    return blog.save();
  });
};

BlogSchema.methods.toJSONFor = function(user){
  return {
    slug: this.slug,
    title: this.title,
    description: this.description,
    body: this.body,
    toFrontPage: this.toFrontPage,
    approved: this.approved,
    showOnlyPreview: this.showOnlyPreview,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    tagList: this.tagList,
    favorited: user ? user.isFavorite(this._id) : false,
    favoritesCount: this.favoritesCount,
    author: this.author.toProfileJSONFor(user)
  };
};

mongoose.model('Blog', BlogSchema);
