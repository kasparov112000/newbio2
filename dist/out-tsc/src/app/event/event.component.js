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
var EventComponent = /** @class */ (function () {
    function EventComponent(route, eventsService, commentsService, router, userService) {
        this.route = route;
        this.eventsService = eventsService;
        this.commentsService = commentsService;
        this.router = router;
        this.userService = userService;
        this.commentControl = new forms_1.FormControl();
        this.commentFormErrors = {};
        this.isSubmitting = false;
        this.isDeleting = false;
    }
    EventComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retreive the prefetched event
        this.route.data.subscribe(function (data) {
            _this.event = data.event;
            // Load the comments on this event
            _this.populateComments();
        });
        // Load the current user's data
        this.userService.currentUser.subscribe(function (userData) {
            _this.currentUser = userData;
            _this.canModify = (_this.currentUser.username === _this.event.author.username) || _this.currentUser.isAdmin;
        });
    };
    EventComponent.prototype.onToggleFavorite = function (favorited) {
        this.event.favorited = favorited;
        if (favorited) {
            this.event.favoritesCount++;
        }
        else {
            this.event.favoritesCount--;
        }
    };
    EventComponent.prototype.onToggleFollowing = function (following) {
        this.event.author.following = following;
    };
    EventComponent.prototype.onToggleAttending = function (attending) {
        this.event.attending = attending;
    };
    EventComponent.prototype.deleteEvent = function () {
        var _this = this;
        this.isDeleting = true;
        this.eventsService.destroy(this.event.slug)
            .subscribe(function (success) {
            _this.router.navigateByUrl('/');
        });
    };
    EventComponent.prototype.populateComments = function () {
        //  this.commentsService.getAll(this.event.slug)
        //   .subscribe(comments => this.comments = comments);
    };
    EventComponent.prototype.addComment = function () {
        var _this = this;
        this.isSubmitting = true;
        this.commentFormErrors = {};
        var commentBody = this.commentControl.value;
        this.commentsService
            .add(this.event.slug, commentBody)
            .subscribe(function (comment) {
            _this.comments.unshift(comment);
            _this.commentControl.reset('');
            _this.isSubmitting = false;
        }, function (errors) {
            _this.isSubmitting = false;
            _this.commentFormErrors = errors;
        });
    };
    EventComponent.prototype.onDeleteComment = function (comment) {
        var _this = this;
        this.commentsService.destroy(comment.id, this.event.slug)
            .subscribe(function (success) {
            _this.comments = _this.comments.filter(function (item) { return item !== comment; });
        });
    };
    EventComponent = __decorate([
        core_1.Component({
            selector: 'app-event-page',
            templateUrl: './event.component.html',
            styleUrls: ['./event.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            core_2.EventsService,
            core_2.CommentsService,
            router_1.Router,
            core_2.UserService])
    ], EventComponent);
    return EventComponent;
}());
exports.EventComponent = EventComponent;
//# sourceMappingURL=event.component.js.map