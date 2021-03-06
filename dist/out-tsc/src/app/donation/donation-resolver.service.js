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
var core_2 = require("../core");
var operators_1 = require("rxjs/operators");
var DonationResolver = /** @class */ (function () {
    function DonationResolver(donationsService, router, userService) {
        this.donationsService = donationsService;
        this.router = router;
        this.userService = userService;
    }
    DonationResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return this.donationsService.get(route.params['slug'])
            .pipe(operators_1.catchError(function (err) { return _this.router.navigateByUrl('/'); }));
    };
    DonationResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_2.DonationsService,
            router_1.Router,
            core_2.UserService])
    ], DonationResolver);
    return DonationResolver;
}());
exports.DonationResolver = DonationResolver;
//# sourceMappingURL=donation-resolver.service.js.map