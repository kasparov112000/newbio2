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
var ProfileEventsComponent = /** @class */ (function () {
    function ProfileEventsComponent(route, router) {
        this.route = route;
        this.router = router;
        this.eventsConfig = {
            type: 'all',
            filters: {}
        };
    }
    ProfileEventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.data.subscribe(function (data) {
            _this.profile = data.profile;
            _this.eventsConfig = {
                type: 'all',
                filters: {}
            }; // Only method I found to refresh event load on swap
            _this.eventsConfig.filters.author = _this.profile.username;
        });
    };
    ProfileEventsComponent = __decorate([
        core_1.Component({
            selector: 'app-profile-events',
            templateUrl: './profile-events.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router])
    ], ProfileEventsComponent);
    return ProfileEventsComponent;
}());
exports.ProfileEventsComponent = ProfileEventsComponent;
//# sourceMappingURL=profile-events.component.js.map