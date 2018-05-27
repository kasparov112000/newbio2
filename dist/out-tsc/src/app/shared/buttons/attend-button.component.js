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
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var AttendButtonComponent = /** @class */ (function () {
    function AttendButtonComponent(profilesService, eventsService, router, userService) {
        this.profilesService = profilesService;
        this.eventsService = eventsService;
        this.router = router;
        this.userService = userService;
        this.toggle = new core_1.EventEmitter();
        this.isSubmitting = false;
    }
    AttendButtonComponent.prototype.toggleAttending = function () {
        var _this = this;
        this.isSubmitting = true;
        // TODO: remove nested subscribes, use mergeMap
        this.userService.isAuthenticated.pipe(operators_1.concatMap(function (authenticated) {
            // Not authenticated? Push to login screen
            if (!authenticated) {
                _this.router.navigateByUrl('/login');
                return rxjs_1.of(null);
            }
            // Follow this profile if we aren't already
            if (!_this.event.attending) {
                return _this.eventsService.attend(_this.event.slug)
                    .pipe(operators_1.tap(function (data) {
                    _this.isSubmitting = false;
                    _this.toggle.emit(true);
                }, function (err) { return _this.isSubmitting = false; }));
                // Otherwise, unattend this profile
            }
            else {
                return _this.eventsService.unattend(_this.event.slug)
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
    ], AttendButtonComponent.prototype, "event", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AttendButtonComponent.prototype, "toggle", void 0);
    AttendButtonComponent = __decorate([
        core_1.Component({
            selector: 'app-attend-button',
            templateUrl: './attend-button.component.html'
        }),
        __metadata("design:paramtypes", [core_2.ProfilesService,
            core_2.EventsService,
            router_1.Router,
            core_2.UserService])
    ], AttendButtonComponent);
    return AttendButtonComponent;
}());
exports.AttendButtonComponent = AttendButtonComponent;
//# sourceMappingURL=attend-button.component.js.map