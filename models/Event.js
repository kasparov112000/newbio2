var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var slug = require('slug');
var User = mongoose.model('User');

var EventSchema = new mongoose.Schema({
  slug: {type: String, lowercase: true, unique: true},
  title: String,
  description: String,
  location: String,
  body: String,
  favoritesCount: {type: Number, default: 0},
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  tagList: [{ type: String }],
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {timestamps: true},  {usePushEach: true});

EventSchema.plugin(uniqueValidator, {message: 'is already taken'});

EventSchema.pre('validate', function(next){
  if(!this.slug)  {
    this.slugify();
  }

  next();
});

EventSchema.methods.slugify = function() {
  this.slug = slug(this.title) + '-' + (Math.random() * Math.pow(36, 6) | 0).toString(36);
};

EventSchema.methods.updateFavoriteCount = function() {
  var event = this;

  return User.count({favorites: {$in: [event._id]}}).then(function(count){
    event.favoritesCount = count;
  });
};


EventSchema.methods.toJSONFor = function(user){
  return {
    slug: this.slug,
    title: this.title,
    description: this.description,
    body: this.body,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    tagList: this.tagList,  
    attending: user ? user.isAttending(this._id) : false, 
    favorited: user ? user.isFavorite(this._id) : false,    
    favoritesCount: this.favoritesCount,
    attendingCount: this.attendingCount,
    author: this.author.toProfileJSONFor(user)
  };
};

mongoose.model('Event', EventSchema);
