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
var core_2 = require("../core");
var DonationCommentComponent = /** @class */ (function () {
    function DonationCommentComponent(userService) {
        this.userService = userService;
        this.deleteComment = new core_1.EventEmitter();
    }
    DonationCommentComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Load the current user's data
        this.userService.currentUser.subscribe(function (userData) {
            _this.canModify = (userData.username === _this.comment.author.username);
        });
    };
    DonationCommentComponent.prototype.deleteClicked = function () {
        this.deleteComment.emit(true);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DonationCommentComponent.prototype, "comment", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DonationCommentComponent.prototype, "deleteComment", void 0);
    DonationCommentComponent = __decorate([
        core_1.Component({
            selector: 'app-donation-comment',
            templateUrl: './donation-comment.component.html'
        }),
        __metadata("design:paramtypes", [core_2.UserService])
    ], DonationCommentComponent);
    return DonationCommentComponent;
}());
exports.DonationCommentComponent = DonationCommentComponent;
//# sourceMappingURL=donation-comment.component.js.map