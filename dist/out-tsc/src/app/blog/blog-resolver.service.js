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
var BlogResolver = /** @class */ (function () {
    function BlogResolver(blogsService, router, userService) {
        this.blogsService = blogsService;
        this.router = router;
        this.userService = userService;
    }
    BlogResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return this.blogsService.get(route.params['slug'])
            .pipe(operators_1.catchError(function (err) { return _this.router.navigateByUrl('/'); }));
    };
    BlogResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_2.BlogsService,
            router_1.Router,
            core_2.UserService])
    ], BlogResolver);
    return BlogResolver;
}());
exports.BlogResolver = BlogResolver;
//# sourceMappingURL=blog-resolver.service.js.map