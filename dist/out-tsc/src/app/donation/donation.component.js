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
var DonationComponent = /** @class */ (function () {
    function DonationComponent(route, donationsService, commentsService, router, userService) {
        this.route = route;
        this.donationsService = donationsService;
        this.commentsService = commentsService;
        this.router = router;
        this.userService = userService;
        this.commentControl = new forms_1.FormControl();
        this.commentFormErrors = {};
        this.isSubmitting = false;
        this.isDeleting = false;
    }
    DonationComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retreive the prefetched donation
        this.route.data.subscribe(function (data) {
            _this.donation = data.donation;
            // Load the comments on this donation
            _this.populateComments();
        });
        // Load the current user's data
        this.userService.currentUser.subscribe(function (userData) {
            _this.currentUser = userData;
            _this.canModify = (_this.currentUser.username === _this.donation.author.username);
        });
    };
    DonationComponent.prototype.onToggleFavorite = function (favorited) {
        this.donation.favorited = favorited;
        if (favorited) {
            this.donation.favoritesCount++;
        }
        else {
            this.donation.favoritesCount--;
        }
    };
    DonationComponent.prototype.onToggleFollowing = function (following) {
        this.donation.author.following = following;
    };
    DonationComponent.prototype.deleteDonation = function () {
        var _this = this;
        this.isDeleting = true;
        this.donationsService.destroy(this.donation.slug)
            .subscribe(function (success) {
            _this.router.navigateByUrl('/');
        });
    };
    DonationComponent.prototype.populateComments = function () {
        var _this = this;
        this.commentsService.getAll(this.donation.slug)
            .subscribe(function (comments) { return _this.comments = comments; });
    };
    DonationComponent.prototype.addComment = function () {
        var _this = this;
        this.isSubmitting = true;
        this.commentFormErrors = {};
        var commentBody = this.commentControl.value;
        this.commentsService
            .add(this.donation.slug, commentBody)
            .subscribe(function (comment) {
            _this.comments.unshift(comment);
            _this.commentControl.reset('');
            _this.isSubmitting = false;
        }, function (errors) {
            _this.isSubmitting = false;
            _this.commentFormErrors = errors;
        });
    };
    DonationComponent.prototype.onDeleteComment = function (comment) {
        var _this = this;
        this.commentsService.destroy(comment.id, this.donation.slug)
            .subscribe(function (success) {
            _this.comments = _this.comments.filter(function (item) { return item !== comment; });
        });
    };
    DonationComponent = __decorate([
        core_1.Component({
            selector: 'app-donation-page',
            templateUrl: './donation.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            core_2.DonationsService,
            core_2.CommentsService,
            router_1.Router,
            core_2.UserService])
    ], DonationComponent);
    return DonationComponent;
}());
exports.DonationComponent = DonationComponent;
//# sourceMappingURL=donation.component.js.map