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
var router_1 = require("@angular/router");
var core_2 = require("../../core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var Favorite1ButtonComponent = /** @class */ (function () {
    function Favorite1ButtonComponent(eventsService, router, userService, eventService) {
        this.eventsService = eventsService;
        this.router = router;
        this.userService = userService;
        this.eventService = eventService;
        this.toggle = new core_1.EventEmitter();
        this.isSubmitting = false;
    }
    Favorite1ButtonComponent.prototype.toggleFavorite = function () {
        var _this = this;
        this.isSubmitting = true;
        this.userService.isAuthenticated.pipe(operators_1.concatMap(function (authenticated) {
            // Not authenticated? Push to login screen
            if (!authenticated) {
                _this.router.navigateByUrl('/login');
                return rxjs_1.of(null);
            }
            // Favorite the event if it isn't favorited yet
            if (!_this.event.favorited) {
                return _this.eventsService.favorite(_this.event.slug)
                    .pipe(operators_1.tap(function (data) {
                    _this.isSubmitting = false;
                    _this.toggle.emit(true);
                }, function (err) { return _this.isSubmitting = false; }));
                // Otherwise, unfavorite the event
            }
            else {
                return _this.eventsService.unfavorite(_this.event.slug)
                    .pipe(operators_1.tap(function (data) {
                    _this.isSubmitting = false;
                    _this.toggle.emit(false);
                }, function (err) { return _this.isSubmitting = false; }));
            }
        })).subscribe();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Favorite1ButtonComponent.prototype, "event", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], Favorite1ButtonComponent.prototype, "toggle", void 0);
    Favorite1ButtonComponent = __decorate([
        core_1.Component({
            selector: 'app-favorite1-button',
            templateUrl: './favorite1-button.component.html'
        }),
        __metadata("design:paramtypes", [core_2.EventsService,
            router_1.Router,
            core_2.UserService,
            core_2.EventsService])
    ], Favorite1ButtonComponent);
    return Favorite1ButtonComponent;
}());
exports.Favorite1ButtonComponent = Favorite1ButtonComponent;
//# sourceMappingURL=favorite1-button.component.js.map