"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var core_2 = require("../core");
var BlogComponent = /** @class */ (function () {
    function BlogComponent(route, blogsService, commentsService, router, userService) {
        this.route = route;
        this.blogsService = blogsService;
        this.commentsService = commentsService;
        this.router = router;
        this.userService = userService;
        this.commentControl = new forms_1.FormControl();
        this.commentFormErrors = {};
        this.isSubmitting = false;
        this.isDeleting = false;
    }
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retreive the prefetched blog
        this.route.data.subscribe(function (data) {
            _this.blog = data.blog;
            // Load the comments on this blog
            _this.populateComments();
        });
        // Load the current user's data
        this.userService.currentUser.subscribe(function (userData) {
            _this.currentUser = userData;
            _this.canModify = (_this.currentUser.username === _this.blog.author.username) || _this.currentUser.isAdmin;
        });
    };
    BlogComponent.prototype.onToggleFavorite = function (favorited) {
        this.blog.favorited = favorited;
        if (favorited) {
            this.blog.favoritesCount++;
        }
        else {
            this.blog.favoritesCount--;
        }
    };
    BlogComponent.prototype.onToggleFollowing = function (following) {
        this.blog.author.following = following;
    };
    BlogComponent.prototype.deleteBlog = function () {
        var _this = this;
        this.isDeleting = true;
        this.blogsService.destroy(this.blog.slug)
            .subscribe(function (success) {
            _this.router.navigateByUrl('/');
        });
    };
    BlogComponent.prototype.populateComments = function () {
        var _this = this;
        this.commentsService.getAll(this.blog.slug)
            .subscribe(function (comments) { return _this.comments = comments; });
    };
    BlogComponent.prototype.addComment = function () {
        var _this = this;
        this.isSubmitting = true;
        this.commentFormErrors = {};
        var commentBody = this.commentControl.value;
        this.commentsService
            .add(this.blog.slug, commentBody)
            .subscribe(function (comment) {
            _this.comments.unshift(comment);
            _this.commentControl.reset('');
            _this.isSubmitting = false;
        }, function (errors) {
            _this.isSubmitting = false;
            _this.commentFormErrors = errors;
        });
    };
    BlogComponent.prototype.onDeleteComment = function (comment) {
        var _this = this;
        this.commentsService.destroy(comment.id, this.blog.slug)
            .subscribe(function (success) {
            _this.comments = _this.comments.filter(function (item) { return item !== comment; });
        });
    };
    BlogComponent = __decorate([
        core_1.Component({
            selector: 'app-blog-page',
            templateUrl: './blog.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            core_2.BlogsService,
            core_2.CommentsService,
            router_1.Router,
            core_2.UserService])
    ], BlogComponent);
    return BlogComponent;
}());
exports.BlogComponent = BlogComponent;
//# sourceMappingURL=blog.component.js.map